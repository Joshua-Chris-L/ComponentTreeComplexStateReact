import React from "react";

function Todoitem(props) {
  // const [isDone, setIsDone] = useState(false);
  // function handleClick(){
  //   setIsDone(prevValue => {
  //   return !prevValue;
  // })
  //}
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li> {props.text} </li>
    </div>
  );
}

export default Todoitem;

//  /* <li style={{textDecoration: isDone ? "line-through" : "none"}}> {text} </li> */}
