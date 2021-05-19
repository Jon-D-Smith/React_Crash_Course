import { useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'



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
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;
