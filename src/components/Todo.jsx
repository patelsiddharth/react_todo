import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from './Footer';

export default function ToDo() {
    const [taskList, setTaskList] = useState([]);
    const completedTodos = taskList.filter(item => item.done).length;
    const totalTodos = taskList.length;

    function handleSubmit(taskName) {
        setTaskList([...taskList, taskName]);
    }
    
    return (
        <>
            <Form 
                handleSubmit={handleSubmit}
            />
            <TodoList 
                taskList={taskList}
                setTaskList={setTaskList}
            />
            <Footer 
                completedTodos={completedTodos}
                totalTodos={totalTodos}
            />
        </>
    )
}