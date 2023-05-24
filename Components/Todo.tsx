import {
  DeleteTodoData,
  GetTodoData,
  PatchTodoData,
  PostTodoData,
} from "@/api/api";
import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { ImSad, ImHappy } from "react-icons/im";
interface Todo {
  id: number;
  task: string;
  status: boolean;
}
export default function Todo() {
  const [task, setTask] = useState<Todo[] | []>([]);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(0);
  const [notDone, setNotDone] = useState(0);

  const handleGetTasks = () => {
    setLoading(!loading);
    GetTodoData()
      .then((res) => {
        setTask(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handlePostTodo = (text: string) => {
    const Payload = {
      task: text,
      status: false,
    };
    return PostTodoData(Payload)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleAdd = (text: string) => {
    handlePostTodo(text).then(() => handleGetTasks());
  };

  const handleToggleTask = (status: boolean, id: number) => {
    const payload = {
      status: status,
    };
    return PatchTodoData(payload, id)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  };

  const ToggleTask = (status: boolean, id: number) => {
    handleToggleTask(status, id).then(() => handleGetTasks());
  };

  const handleDeleteTask = (id: number) => {
    return DeleteTodoData(id)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => console.log(err));
  };
  const DeleteTask = (id: number) => {
    handleDeleteTask(id).then(() => handleGetTasks());
  };

  // const handleCompleted = ( ) =>{
  //     CountOfCompleted().then((res)=>{
  //         setDone(res.data.length);
  //     })
  // }
  // handleCompleted();

  // const handleInCompleted = ( ) =>{
  //     CountOfInCompleted().then((res)=>{
  //         setNotDone(res.data.length)
  //     })
  // }
  // handleInCompleted();

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <>
      <div>
        <AddTodo handleAdd={handleAdd} />
        <div>
          {/* <p>{`Completed : ${done}`}</p>
                    <p>{`In-Completed : ${notDone}`}</p> */}
          <p className="text-center">{loading && "...Loading"}</p>
          {task.map((e: Todo) => {
            return (
              <div
                key={e.id}
                className="flex justify-between w-11/12 m-auto text-md p-5"
              >
                <p className="w-1/5">{e.task}</p>
                <p
                  className={`${e.status ? "text-green-600" : "text-red-600"}`}
                >
                  {e.task ? "In-Complete" : "Completed"}
                </p>
                <p
                  className={`${e.status ? "text-green-600" : "text-red-600"}`}
                >
                  {" "}
                  {e.status ? <ImHappy /> : <ImSad />}
                </p>
                <button
                  onClick={() => ToggleTask(!e.status, e.id)}
                  className="w-2/12"
                >
                  Mark As {e.status ? "Not Done" : "Done"}
                </button>
                <button onClick={() => DeleteTask(e.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
