import Navbar from "@/Components/Navbar"
import Todo from "@/Components/Todo"
export default function TodoPage ( ) {
    return (
        <>
        <Navbar/>
        <h1 className="text-center text-2xl mt-10">Welcome to Todo App</h1>
        <Todo/>
        </>
    )
}