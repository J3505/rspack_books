
import { type PropsWithChildren } from "react"

type Books = PropsWithChildren<{
    id:number;
    title:string;
    deleteBook:(id:number)=>void;
}>;
const Book = ({title, id, children,deleteBook}:Books) =>{
     return (
    <>
    <article className="flex flex-col gap-4 justify-between items-center">
        <div className="flex flex-col gap-4">
            <h2 >{title}</h2>
            {children}
        </div>
        <button onClick={()=>deleteBook(id)} className="bg-red-300 p-2 rounded-2xl text-white font-bold">Eliminar</button>
    </article>
      
    </>
  )
}

 


export default Book
