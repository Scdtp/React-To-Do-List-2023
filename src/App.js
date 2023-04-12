import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState ,  useEffect } from "react";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasklist, setTasks] = useState([]); // end of setTask

  useEffect(()=>{
    const getTasks = async() =>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
      getTasks()
  }, []);


  //FETCh TASKs
  const fetchTasks = async() =>{
    const res = await fetch('http://localhost:5000/tasklist')
    const data  = await res.json();
    return data
  }

  
  //FETCh TASK
  const fetchTask = async(id) =>{
    const res = await fetch(`http://localhost:5000/tasklist/${id}`)
    const data  = await res.json();
    return data
  }

  // ADD TASK 
  
  /*const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    //console.log(id);

    const newTask = { id, ...task }
    setTasks([...tasklist, newTask]);
  }*/

  const addTask = async (tasklist) => {
    const res = await fetch('http://localhost:5000/tasklist', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tasklist)
    })

    const data = await res.json()
   
    setTasks([...tasklist, data]);
  }


  // DELETE TASK
/*
  const deleteTask = (id) => {
    // alert('delte test' + id);
    // console.log('This is a delete task code block function', id);
    setTasks(tasklist.filter((tasklist) => tasklist.id !== id));
  }
  */

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasklist/${id}`,{
      method: 'DELETE'
    })
    setTasks(tasklist.filter((tasklist) => tasklist.id !== id));
  }
 


  // TOGGLE TASK
/*
  const toggleActive = (id) => {
    // console.log(id);
    setTasks(
      tasklist.map((tasklist) =>
        tasklist.id === id ? { ...tasklist, reminder: !tasklist.reminder } : tasklist)) // We are setting the opposite of the tasklist reminder property in this line !tasklist
  }
  */

  const toggleActive = async (id) => {
   
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder : !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasklist/${id}`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(
      tasklist.map((tasklist) =>
        tasklist.id === id ? { ...tasklist, reminder: data.reminder } : tasklist)) // We are setting the opposite of the tasklist reminder property in this line !tasklist
  }

  return (
    <div className="container animate__heartBeat">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasklist.length > 0 ? <Tasks tasklist={tasklist} onDelete={deleteTask} onToggle={toggleActive} /> : 'No tasks to accomplish'}
    </div>
  );
}

export default App;
