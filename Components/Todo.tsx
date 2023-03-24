import { GetTodoData } from "@/Fetch/Fetch";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
interface Todo { 
    id : number,
    task : string,
    status : boolean
}
export default function Todo() {
    const [task,setTask] = useState <Todo[ ] | [ ]>([ ]);

    const handleGetTasks = ( ) =>{
        GetTodoData( ).then((res)=>{
            console.log(res.data)
            setTask(res.data)
        })
    }

    useEffect(( ) =>{
        handleGetTasks( );
    }, [ ]);

    return (
        <>
            <div>
                <AddTodo/>

                <div>
                    {task.map((e:Todo)=>{
                        return <div key={e.id}>
                            <p>{e.task}</p>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}