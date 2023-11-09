
import React, { useState } from "react";
import './../styles/App.css';
const App = () => {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(Array(tasks.length).fill(false))
  const [addTaskName, setAddTaskname] = useState('')

  const [editTaskText, setEditTaskText] = useState('')
  function addNewTask() {
    const newTasks = [...tasks, addTaskName]
    setTasks(newTasks)
  }

  function deleteTask(i) {
    const newTasks = [...tasks]
    const newEditTasks = [...editTask]
    newTasks.splice(i,1)
    newEditTasks.splice(i,1)
    setTasks(newTasks)
    setEditTask(newEditTasks)
  }
  function editCurrentTask(i){
    const newEditTasks = [...editTask]
    newEditTasks[i] = true
    setEditTask(newEditTasks)
  }
  function saveEditedTask(i){
    const newTasks = [...tasks]
    newTasks[i] = editTaskText
    setTasks(newTasks)
    const newEditTask = [...editTask]
    newEditTask[i] = false
    setEditTask(newEditTask)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <div className="add_tasks_section" >
        <textarea rows="1" value={addTaskName} onChange={e => setAddTaskname(e.target.value)} ></textarea>
        <button onClick={addNewTask} >Add</button>
      </div>
      <div className="tasks_section" >
        {
          tasks.map((task, i) => {
            return (
              <div  key={i}>
                {
                  editTask[i] ?
                    <textarea value={editTaskText} onChange={e=>setEditTaskText(e.target.value)}   />
                    :
                    <h3 className="task">{task}</h3>
                }
                {
                  editTask[i] ?
                    <button className="save" onClick={()=>saveEditedTask(i)} >Save</button>
                    :
                    <>
                      <button className="edit" onClick={()=>editCurrentTask(i)} >Edit</button>
                      <button className="delete" onClick={() => deleteTask(i)} >Delete</button>
                    </>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
