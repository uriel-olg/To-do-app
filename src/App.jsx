import { useContext } from 'react'
import './App.css'
import { TareasContext } from './components/TareasContext'
import Tarea from './components/Tarea'
import { ThemeContext } from './components/ModeTheme'

function App() {

  const {tareas,toggleCheck} = useContext(TareasContext)
  const {Tema} = useContext(ThemeContext)
  const {Texto,setTexto,handleSubmit} = useContext(TareasContext)
  

  return (
    
    <>
      <header className='header'>
        <h2 className='Titulo'>Lista de tareas</h2>
        <button onClick={toggleCheck} className= {Tema ? "tema-noche" : "tema-dia"}>
          <img src="src/media/notasB.png" id='tema-icon'/>
        </button>
      </header>

      <section className='seccion'>
        <form className='formulario' onSubmit={handleSubmit}>
          <input type="text" 
          placeholder='Enter a new task' 
          value={Texto}
          onChange={(e)=> setTexto(e.target.value)} 
          className='input'/>
          <button className='boton-enviar' type='submit'>Add Task</button>
        </form>
      </section>

      <section className='Lista-tareas'>
        <ul className='ul-task'>
          {tareas.map((tarea) => (
            <Tarea key={tarea.id}
              id={tarea.id}
              task={tarea.task}
              check={tarea.check}
              onToggle={()=> toggleCheck(tarea.id)}
            />
          ))}
        </ul>
      </section>
    </>
  )
}

export default App
