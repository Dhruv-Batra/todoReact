import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Item from './Item';


function App() {

  const[task, setTask] = useState("");
  const[taskList,setTaskList] = useState([]);



  const Printer = taskList.map( item => (
    <div>
      <div className="Rect">
        <p>{item.task}</p>
        <button className="button"><i class="fa fa-arrow-up"></i></button>
        <button className="button"><i class="fa fa-arrow-down"></i></button>
        <button className="button"><i class="fa fa-pencil"></i></button>
        <button className="button"><i class="fa fa-trash"></i></button>
      </div>
      <br></br>
    </div>
  ));

  return (
    <div className="App">

      <header className="App-header">
        <h2>To Do List</h2>
        <div class="grid-container">
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
          <img src={logo} className="App-logo grid-item" alt="logo"/>
        </div>
      </header>
      <div class="App-body">
        <br></br>
        {/*APP CODE HERE*/}
        <div>
        <div>
          <input
            type="text"
            value={task}
            placeholder="Add New Task"
            onChange={event => {
              setTask(event.target.value);
            }}
          />
          <input
            type="button"
            value="Add"
            onClick={e => {
              if (task.length>0){
                setTaskList([
                  ...taskList,
                  {
                    // Use the current size as ID (needed to iterate the list later)
                    id: taskList.length + 1,
                    task: task
                  }
                ]);
                setTask(""); // Clear the text box
              }
            }}
          />
          <br></br>
          <br></br>
          <Item listPassed= {taskList} />{/*{Printer}*/}
        </div>
        </div>



      </div>  
    </div>
  );
}

export default App;
