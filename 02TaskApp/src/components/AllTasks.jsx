import "./AllTasks.css";
import data from "../data";
import { useState } from "react";

const AllTasks = () => {
    const [tasks, setTasks] = useState(data);

    const taskHandler = (id) => {
        const filteredTasks = tasks.filter((task) => {
            return task.id !== id;
        })

        setTasks(filteredTasks);
    }

    const removeAll = () => {
        setTasks([]);
    }

    return ( 
        <> { 
                tasks.map((task) => {
                    const {id, name} = task

                    return <div className="task" key={id}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => taskHandler(id)}>Vymazat</button>
                    </div>
                })}
                <button type="button" className="main-button" onClick={removeAll}>Vše vymazat</button>
        </>
    );
}

export default AllTasks;