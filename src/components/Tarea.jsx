import { useContext, useState } from "react";
import "./Tarea.css"
import { TareasContext } from "./TareasContext";


const Tarea = ({id,task,check,onToggle}) => {

    const {deleteTask,updateTask} = useContext(TareasContext)
    
    const [edit,setEdit] = useState(false)
    const [newTexto,setTexto] = useState(task)
    
    const handleUpdate= () => {
        updateTask({id,task:newTexto,check})
        setEdit(false)
    }
    return (
        <li className="li-task">

            {edit ? (
                <>
                    <input type="text" 
                    className="title-edit"
                    value={newTexto} 
                    onChange={(e)=>{setTexto(e.target.value)}} 
                    placeholder="Editar"></input>
                    <button 
                    className="buton-edit"
                    onClick={()=> handleUpdate()}>Guardar</button>
                </>
            ) : (
                <>
                <label class="checkbox-wrapper">
                <input type="checkbox" />
                <span class="checkmark"></span>
                </label>

                <p className="title">{task}</p>
                <button className="buton" id="edit" onClick={()=> setEdit(true)}><img src="/media/editar.png" id="span"/></button>
                <button className="buton" id="delete" onClick={()=> deleteTask(id)}><img src="/media/basura.png" id="span"/></button>
                </>
            )}
        </li>
    )
}

export default Tarea;