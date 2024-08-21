import { useState } from "react";
import styles from './form.module.css';

export default function Form({handleSubmit}) {
    const [taskName, setTaskName] = useState({
        id: Math.random(),
        name: '',
        done: false
    });

    function handleFormSubmit(e) {
        e.preventDefault();
        handleSubmit(taskName);
        setTaskName({
            id: Math.random(),
            name: '',
            done: false
        })
    }

    return (
        <form className={styles.todoform} onSubmit={handleFormSubmit}>
            <input 
                className={styles.modernInput}
                type="text"
                placeholder="Enter todo item"
                value={taskName.name}
                onChange={(e) => setTaskName({...taskName, name: e.target.value})}
            ></input>
            <button type="submit" className={styles.modernButton}>Add</button>
        </form>
    )
}