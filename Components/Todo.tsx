import { GetTodoData, PatchTodoData, PostTodoData } from "@/Fetch/Fetch";
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
    const [loading,setLoading] = useState(false);

    const handleGetTasks = () => {
        setLoading(!loading)
        GetTodoData().then((res) => {
            setTask(res.data);
            setLoading(false)
        })
        .catch((err)=>console.log(err))
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


    const handleToggleTask = (status : boolean,id:number) =>{
        const payload = {
            status : status
        }
        return PatchTodoData(payload,id).then((res)=>{
            console.log(res.data)
            setTask(res.data)
        })
        .catch((err)=> console.log(err))
    }

    const ToggleTask = (status : boolean,id:number) =>{
        handleToggleTask (status,id).then(( ) => handleGetTasks( ));
    }
    
    useEffect(() => {
        handleGetTasks();
    }, []);

    return (
        <>
            <div>
                <AddTodo handleAdd={handleAdd}/>
                <div>
                    <p className="text-center">{loading && '...Loading'}</p>
                    {task.map((e: Todo) => {
                        return <div key={e.id} className='flex justify-between w-11/12 m-auto text-md p-5'>
                            <p className="w-1/5">{e.task}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}>{e.task ? 'In-Complete' : 'Completed'}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}> {e.status ? <ImHappy/> : <ImSad />}</p>
                            <button onClick={( ) =>ToggleTask(!e.status,e.id)}>Mark As {e.status ? 'In-Complete' : 'Complete'}</button>
                            <button>Delete</button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}