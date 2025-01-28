
import {type Book as book} from '../App'

import Book from "./Book"

type Props= {
    books:book[];
    deleteBooks:(id:number)=>void;
}
const ListBook = ({books, deleteBooks}:Props) => {
  return (

    <>
        <ul className='bg-emerald-500 p-4 flex flex-wrap gap-4 justify-between'>
            {
                books.length !== 0 ? (
                    books.map((book)=>(
                    <li key={book.id} className='bg-orange-300 p-4 rounded-3xl gap-3 w-[10rem] h-[14rem]'>
                        <Book id={book.id} title={book.title} deleteBook={ deleteBooks}>
                            <p>{book.description}</p>
                        </Book>
                    </li>
                ))):( <h1> No existe Libros</h1> )
                
                }
        </ul>
    </>
    
    )}
 

export default ListBook
