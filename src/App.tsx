import { useState } from "react";

import Header from "./components/Header";
import logo from "./assets/react.svg"
import AddBook from "./components/AddBook";
import ListBook from "./components/ListBook";

export type Book ={
 title: string;
 description:string;
 id:number
}

function App() {
	const [book, setBook] = useState<Book[]>([])

	function addBook(book:string, description:string){
		setBook((preBooks)=>{
			const newBook:Book ={
				id:Math.random(),
				title:book,
				description:description

			};			
			return [...preBooks, newBook];
		});
		
	}
	
	// Funcion para eliminar
	function deleteBook(id:number){
		setBook((preBook)=> preBook.filter((book)=> book.id !=id))
	}
	return (
		<>
			<main className="bg-amber-200 flex  flex-col items-center justify-center p-4 m-10 rounded-4xl shadow-2xl">
				<Header image={{src:logo, alt:"Imagen de prueba"}}>
					<h1 className="font-bold text-3xl"> Lista de libros </h1>

				</Header>
				<AddBook agregar={addBook}/>
				<ListBook books={book} deleteBooks={deleteBook}/>
			</main>
		</>
	);
}

export default App;
