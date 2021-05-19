import {useState} from 'react'

const Tasks = () => {

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

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
