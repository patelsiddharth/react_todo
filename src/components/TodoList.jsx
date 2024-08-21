import TodoItem from "./TodoItem";
import styles from "./todolist.module.css"

export default function TodoList({taskList, setTaskList}) {
    const sortedList = [...taskList].sort((a,b) => Number(a.done) - Number(b.done))
    return (
        <div className={styles.list}>
            {
                sortedList.map((task, idx) => (
                    <TodoItem 
                        key={idx} 
                        task={task}
                        taskList={taskList}
                        setTaskList={setTaskList}
                    ></TodoItem>
                ))
            }
        </div>
    )
}