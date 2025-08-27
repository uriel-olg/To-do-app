import { createContext, useEffect, useState } from "react";

export const TareasContext = createContext();

const TareasProvider = ({children}) => {

    const [Texto,setTexto] = useState("")
    
    //Estado incial: intenta leer del localStorage o usa []

    const [tareas,setTareas] = useState(()=>{
        const storeTareas = localStorage.getItem("notas")
        try{
            return storeTareas ? JSON.parse(storeTareas) : []
        }catch(e){
            console.log("Ocurrio el siguiente error"+e)
        }
        
    })

    //Guardar en el localStorage cada vez que "Tarea" cambie
    useEffect( () => {
        localStorage.setItem("notas",JSON.stringify(tareas)),
        console.log("Tareas actualizadas")
    },[tareas])

    const toggleCheck = (id) => {
        setTareas(tareas.map(t => 
        t.id === id ? {...t, check: !t.check} : t
        ))
    }

    //Agrega una tarea nueva cada vez q el boton submit se active
    const handleSubmit = (e) =>{
        try{
            e.preventDefault() // Evita que se recargue la pagina
        if(Texto.trim() === "") return //Evita agregar vacios
        setTareas([...tareas,{id:Math.random(),task:Texto,check:false}])
        setTexto("") // Limpia el input
        }catch(e){
            console.log(e)
        }
        
    }

    //Funcion para eliminar una tarea por su id
    const deleteTask = (id) =>{
        setTareas(prev => prev.filter(t => t.id !==id))
    }

    //Actualiza las tareas 
    const updateTask = (updated) => {
    setTareas(prev => prev.map(t => (t.id === updated.id ? updated : t))
    );
    };

    return (
        <TareasContext.Provider value={{tareas,setTareas,toggleCheck,handleSubmit,setTexto,Texto,
            deleteTask,updateTask
        }}>
            {children}
        </TareasContext.Provider>
    )
}

export {TareasProvider}
