import React, { useState } from "react";

function App() {
  
  const [initialItem, finalItem]   = useState("");
  const [initialArray, finalArray] = useState([])
 
  function handleChange(event) {
    const itemValue = event.target.value;
    finalItem(itemValue);
  }

  function handleClick(){
    finalArray( prevValue => {
      return[...prevValue, initialItem ];
    });
    finalItem("");
};

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List  </h1>
      </div>
      <div className="form">
        <input
          name=""
          onChange={handleChange}
          type="text"
          value={initialItem}
        />

        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>

      <div>
        <ul>
          <li>A Item </li>
          {initialArray.map(item =>  <li> {item} </li> )}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
