import React, {useState} from 'react';

import taskList from './tasks.js'

function App() {

  const [tasks, setTasks] = useState(taskList)
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks, newTask])
  }

  return (
    <>
    <div className="container mt-5">
      <div class="mb-3">
        <form onSubmit={handleSubmit}>
          <label for="new-task" class="form-label">Enter new task</label>
          <input type="text" class="form-control" id="new-task" placeholder="New task"
          autocomplete="off" onChange={(e) => setNewTask(e.target.value)}/>
          <div class="col-auto mt-1">
            <button type="submit" class="btn btn-primary mb-3">Enter</button>
          </div>
        </form>
      </div>

      <table class="table">
      <thead>
        <tr>
          <th>Task</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <td>{task}</td>
                <td><button type="button" class="btn btn-danger" onClick={() => setTasks(tasks.filter(item => tasks.indexOf(item) !== index))}>Delete</button></td>
              </tr>
            )
          })}
      </tbody>
    </table>
    </div>    
    </>
  
  );
}

export default App;