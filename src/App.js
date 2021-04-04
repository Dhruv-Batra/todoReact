import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const[task, setTask] = useState("");
  const[taskList,setTaskList] = useState([]);
  const[search, setSearch] = useState("");
  const[searchResult, setSearchResult] = useState("Looking for a task? Try using the Search Bar Above!");
  const[searchResultPrint, setSearchResultPrint] = useState("");

  function moveUp(loc){
    loc--;
    let reList = [...taskList];
    if (loc!==0){
        let temp = reList[loc];
        reList[loc]=reList[loc-1];
        reList[loc-1]=temp;
        
        let tempid=reList[loc].id;
        reList[loc].id=reList[loc-1].id;
        reList[loc-1].id=tempid;
    }
    setTaskList((prevState) => prevState = reList)
  }

  function moveDown(loc){
    loc--;
    let reList = [...taskList];
    if (loc!==taskList.length-1){
        let temp = reList[loc];
        reList[loc]=reList[loc+1];
        reList[loc+1]=temp;

        let tempid=reList[loc].id;
        reList[loc].id=reList[loc+1].id;
        reList[loc+1].id=tempid;
    }
    setTaskList((prevState) => prevState = reList)
  }

  function deleter(loc){
    loc--;
    let reList = [...taskList];
    reList.splice(loc,1)
    for (let i=1; i<reList.length+1;i++)
      reList[i-1].id=i;
    setTaskList((prevState) => prevState = reList)
  }

  function editor(loc,editVal){
    loc--;
    let reList = [...taskList];
    reList[loc].task=editVal;
    setTaskList((prevState) => prevState = reList)
  }

  const Printer = taskList.map( item => (
    <div>
      <div className="Rect">
        <p>{item.task}</p>
        <button onClick={ () =>
          {moveUp(item.id)}
        }className="button"><i class="fa fa-arrow-up"></i></button>
        <button onClick={ () =>
          {moveDown(item.id)}
        }className="button"><i class="fa fa-arrow-down"></i></button>
        <button onClick={ () =>
          {editor(item.id)}
        }className="button"><i class="fa fa-pencil"></i></button>
        <button onClick={ () =>
          {
            window.prompt("Edit Task","Go to Sleep");
            editor(item.id,editVal)
          }
        } className="button"><i class="fa fa-trash"></i></button>
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
        
        {/*Printing*/}
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
          {Printer}
        </div>
        {/*Search*/}
        <div>
          <input
            type="text"
            value={search}
            placeholder="Search for a Task"
            onChange={event => {
              setSearch(event.target.value);
            }}
          />
          <input
            type="button"
            value="Go"
            onClick={e => {
              setSearchResult("loading...")
              setSearchResultPrint(""); 
              for (let i=0; i<taskList.length; i++){
                if (taskList[i].task===search){
                  setSearchResult("Result Found")
                  setSearchResultPrint(taskList[i].task)
                  break;
                }else{
                  setSearchResult("No Results Found")
                }
              }
              setTask(""); // Clear the text box
            }}
          />
          <br></br>
          <br></br>
        </div>
        <div className="RectDis">
          <p>{searchResult}</p>
          <p>{searchResultPrint}</p>
        </div>
      </div>  
    </div>
  );
}

export default App;