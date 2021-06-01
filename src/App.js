import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
      {
        id: 1,
        text: 'Food Shopping',
        day: 'Feb 4th at 3:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Take Gus for a walk',
        day: 'May 4th, at 2:00 pm',
        reminder: false,
      },
      {
        id: 3, 
        text: 'Apply for jobs',
        day: 'Today',
        reminder: true,
      },
    ])

    // Add Task
    const addTask = (task) => {
      const id = Math.floor(Math.random() * 10000) + 1
      const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !==id))
    }
    //Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
          task.id === id ? { ...task, reminder: 
          !task.reminder } : task
        )
      )
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask 
      (!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  );
}

export default App;
