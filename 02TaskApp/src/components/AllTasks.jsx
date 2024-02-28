import "./AllTasks.css";
import data from "../data";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRotate, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'

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


    const reload = () => {
        setTasks(data);
    }
    return ( 
        <> { 
                tasks.map((task) => {
                    const {id, name} = task

                    return <div className="task" key={id}>
                        <h4>{name}</h4>
                        <button type="button" onClick={() => taskHandler(id)}><FontAwesomeIcon icon={faXmark} size="xl"/></button>
                    </div>
                })}
                
                {tasks.length > 0 && <button type="button" className="main-button" onClick={removeAll}><FontAwesomeIcon icon={faTrash} size="xl" style={{color: "#ffffff"}} /></button>}
                {tasks.length < 5 && <button type="button" className="main-button reload-button" onClick={reload}><FontAwesomeIcon icon={faRotate} size="xl" style={{color: "#ffffff"}} /></button>}
        </>
    );
}

export default AllTasks;