import { useState } from "react"
import Toaster from "./Toaster";

export default function AddTodo() {
    const [text,setText] = useState<String | ''>('');
    const [toast,setToast] = useState(false);

    const handleAddText = (text : String) =>{
        if(!text){
           setToast(!toast)
        }
        else{
            setToast(false);
        }
    }
    return (
        <>
            {toast && <Toaster/>}
            <div className="w-4/12 m-auto flex justify-center gap-5 mt-5 p-5">
                <input placeholder="Add Task" required onChange={(e) => setText(e.target.value)} className="w-3/6 h-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                <button onClick={( ) => handleAddText(text)}>Add</button>
            </div>
        </>
    )
}