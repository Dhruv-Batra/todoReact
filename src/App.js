import logo from './logo.svg';
import './App.css';
import Item from './Item'
import Counter from './Counter'

function App() {

  let taskList=["Create To Do List"];

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
        {/*APP CODE HERE*/}
        <Counter/>
      </div>
    </div>
  );
}

export default App;
