import {useState} from 'react';

const Item = (taskPassed) => {

    const [task, setTask] = useState(taskPassed);

    const editTask = () => {
        setTask((prevState) => prevState = "changed");
    }

    return(
        <div>
           <p>Result: {task}</p>
           <button onClick={editTask}>+</button> 
        </div>
    );
}

export default Item;