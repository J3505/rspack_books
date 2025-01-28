import { FormEvent, useRef } from "react"


type Prop = {
    agregar:(book:string, description:string)=>void
}

const AddBook = ({agregar}:Prop) => {
    const book = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)

    function addSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        const ingresoBook = book.current!.value;
        const ingresoDescription = description.current!.value;
        
        event.currentTarget.reset()
        agregar(ingresoBook, ingresoDescription);
    }
  return (
    <>
        <form onSubmit={addSubmit} className="bg-amber-800 p-4 rounded-xl flex flex-col gap-4">
            <p className="flex gap-3">
                <label htmlFor="book" className=" text-white">ID</label>
                <input type="text"  id="book" className="bg-white rounded-3xl pr-4" placeholder="Ingrese ID" ref={book}/>
            </p>

            <p className="flex gap-3">
                <label htmlFor="description" className=" text-white">Detalle</label>
                <input type="text"  id="description" className="bg-white rounded-3xl pr-4" placeholder="Ingrese detalle" ref={description} />
            </p>

            <p className=" flex justify-center">
                <button className="bg-blue-500 p-4 rounded-3xl text-white font-bold px-6 py-2"> Agregar Libro</button>
            </p>

        </form>
      
    </>
  )
}

export default AddBook
