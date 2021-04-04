import {useEffect, useState} from 'react';

const Item = ({listPassed}) => {

    const[tasks,setTaskList] = useState(listPassed);

    function moveUp(loc){
        let reList = [...listPassed];
        if (loc!=0){
            let temp = reList[loc];
            reList[loc]=reList[loc-1];
            reList[loc-1]=[...reList];
        }
        setTaskList((prevState) => prevState = reList)
      }

      const Printer = tasks.map( item => (
        <div>
          <div className="Rect">
            <p>{item.task}</p>
            <button onClick={() => moveUp(item.id)} className="button"><i class="fa fa-arrow-up"></i></button>
            <button className="button"><i class="fa fa-arrow-down"></i></button>
            <button className="button"><i class="fa fa-pencil"></i></button>
            <button className="button"><i class="fa fa-trash"></i></button>
          </div>
          <br></br>
        </div>
      ));


    return(
        <div key={listPassed}>
            {Printer}
        </div>
    );
}

export default Item;