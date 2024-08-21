import styles from "./todoitem.module.css";

export default function TodoItem({task, taskList, setTaskList}) {
    function handleDelete() {
        const newList = taskList.filter(item => item.id !== task.id)
        setTaskList(newList);
    }

    function handleItemClick() {
        console.log(task);
        
        const seletedItem = taskList.find(item => item.id === task.id)
        if(seletedItem)
        {
            seletedItem.done = !task.done;
            setTaskList([...taskList]);
        }
    }

    return (
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span
                    onClick={(e) => handleItemClick(e)}
                    className={task.done ? styles.completed : ''}
                >
                    {task.name}
                </span>
                <span 
                    className={styles.deletebtn}
                    onClick={handleDelete}
                    title="Delete item"
                >X</span>
            </div>
        </div>
    )
}