import { useState } from "react";
import "./counter.css";
function counter(){
  const [value,setValue]=useState(0);
  return(
    <>
    the counter value is {value}
    <button onClick={()=>setValue(value+1)}> increment</button>
    <button onClick={()=>setValue(value-1)}>decrement</button>
    </>
  );
}
export default counter;