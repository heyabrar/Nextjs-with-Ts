import { GetTodoData } from "@/Fetch/Fetch";
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
            console.log(res.data)
            setTask(res.data)
        })
    }

    useEffect(() => {
        handleGetTasks();
    }, []);

    return (
        <>
            <div>
                <AddTodo />
                <div>
                    {task.map((e: Todo) => {
                        return <div key={e.id} className='flex justify-between w-11/12 m-auto text-lg'>
                            <p>{e.task}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}>{e.task ? 'Incomplete' : 'Completed'}</p>
                            <p className={`${e.status ? 'text-green-600' : 'text-red-600'}`}> {e.status ? <ImHappy/> : <ImSad />}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}