import React from "react";
// import './studetail.css';

const Car = (props) =>{
  const myLists = props.myLists;  
  const listItems = myLists.map((myList,index) =>  
    <li key={index}>{myList}</li>
  );  
  
  return (  
    <div>  
        <h2>Rendering Lists inside component</h2>  
              <ul >{listItems}</ul>  
    </div>  
  );
} ;

export default Car;