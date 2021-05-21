import { useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appt',
        day: 'Feb 5th at 2:30 PM',
        reminder: true
    },
    {
        id: 2,
        text: 'Dentist Appt',
        day: 'Feb 5th at 3:30 PM',
        reminder: true
    },
    {
        id: 3,
        text: 'nail salon Appt',
        day: 'Feb 5th at 4:30 PM',
        reminder: false
    }
])

//Add Task

const addTask = (task) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
