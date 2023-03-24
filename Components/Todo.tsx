import { GetTodoData, PostTodoData } from "@/Fetch/Fetch";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { ImSad, ImHappy } from 'react-icons/im'
interface Todo {
    id: number,
    task: string,
    status: boolean
}
export default function Todo() {
    const [task, setTask] = useState<Todo[] | []>([]);

    const handleGetTasks = () => {
        GetTodoData().then((res) => {
            setTask(res.data)
        })
    }

    const handlePostTodo = (text:string) =>{
        const Payload = {
            task : text,
            status : false
        }
        return PostTodoData(Payload).then((res)=>{
            setTask(res.data)
        })
        .catch((err)=>console.log(err))
    }

    const handleAdd = (text : string) =>{
        handlePostTodo(text).then(( ) => handleGetTasks( ));
    }
    
    useEffect(() => {
        handleGetTasks();
    }, []);

    return (
        <>
            <div>
                <AddTodo handleAdd={handleAdd}/>
                <div>
                    {task.map((e: Todo) => {
                        return <div key={e.id} className='flex justify-between w-11/12 m-auto text-md p-5'>
                            <p className="w-1/5">{e.task}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}>{e.task ? 'In-Complete' : 'Completed'}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}> {e.status ? <ImHappy/> : <ImSad />}</p>
                            <button>Mark As {e.status ? 'In-Complete' : 'Complete'}</button>
                            <button>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}