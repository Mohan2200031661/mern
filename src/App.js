// import logo from './logo.svg';
import './App.css';
// import React from 'react';
// import MyComponent from './Component/Mycomponent'
// import Uday from './Component/Uday';
// import Stupage from './Component/Studetails'
//import Player from './Component/Player';
import Car from './Component/Carinfo';
//import Sum from './Component/classcomponentprop';

function App() {
  const Cars=["Hyundai","Suzuki","Tata","Toyato"];
  return (
    //<div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <MyComponent/>
    //     <Uday/>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>



    <div>
      <Car myLists={Cars}/>
    </div>


    // <div className="container">
    //      <div style={{ padding: "10px" }}>
    //         <div>
    //            <Sum num1="10" num2="20" />
    //         </div>
    //      </div>
    //   </div>
  );
};

export default App;
