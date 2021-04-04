import {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState = prevState+1);
    }

    return(
        <div>
           <p>Result: {count}</p>
           <button onClick={increment}>+</button> 
        </div>
    );
}

export default Counter