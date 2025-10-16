import { useRef, useState } from "react";
import "./timer.css";
function Vite(){
    const[seconds,setSeconds]=useState(0);
    const TimerRef=useRef(null);

    const startTimer=()=>{
        if(TimerRef.current) return;
        TimerRef.current=setInterval(()=>{
            setSeconds((prev)=>prev+1);
        },1000);
    }
    const stopTimer=()=>{
        clearInterval(TimerRef.current);
        TimerRef.current=null;
    };

    const resetTimer=()=>{
        stopTimer();
        setSeconds(0);
    }

    return(
        <>
        <h2>hillo</h2>
        <div className="main-box">
            <h1>Time-App</h1>
            <p>Current seconds "{seconds}"</p>
            <p>Stop at seconds "{seconds}"</p>
            <p>Timer Reset Seconds "{seconds}"</p>
            <br />
            <button onClick={startTimer}>Click to Start time</button>
            <button onClick={stopTimer}>Click to Stop time</button>
            <button onClick={resetTimer}>Click to Reset time</button>
        </div>
        </>
    );
}
export default Vite;