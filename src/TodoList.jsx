import React, { useState } from 'react';

function TodoApp() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert('Type a new task');
      return;
    }
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="container p-3">
      <h1 className="app-title" id="header">To Do App</h1>
      <div className="card">
        <div className="card-header">
          New Task
        </div>
        <div className="card-body">
          <form onSubmit={addTask} id="addTaskForm">
            <div className="input-group mb-3">
              <input
                id="txtTaskName"
                name="taskName"
                type="text"
                className="form-control"
                placeholder="Type a new task"
                aria-describedby="btnAddNewTask"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit" id="btnAddNewTask">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header">
          Task List
          {tasks.length > 0 &&
            <button
              id="btnDeleteAll"
              className="btn btn-outline-danger btn-sm delete-all float-right"
              onClick={deleteAllTasks}
            >
              Delete All
            </button>
          }
        </div>
        <ul id="task-list" className="list-group">
          {tasks.map((task, index) => (
            <li key={index} className="list-group-item">
              {task}
              <button
                className="btn btn-outline-danger btn-sm float-right"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
