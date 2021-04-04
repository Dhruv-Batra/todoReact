import {useState} from 'react';

const Item = ({listPassed}) => {

    function moveUp(loc){
        if (loc!=0){
            let temp = listPassed[loc];
            listPassed[loc]=listPassed[loc-1];
            listPassed[loc-1]=temp;
        }
    }

    const Printer = listPassed.map( item => (
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