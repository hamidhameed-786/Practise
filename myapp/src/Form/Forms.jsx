import { useState } from "react";
import "./form.css";
function Form(){
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        if(!username || !email || !password){
            alert("all fields are required");
        }
        else{
            alert("form submit succesuly");
            setUsername("");
            setEmail("");
            setPassword("");
        }
    };
    return(
        <>
        <div className="form-box">
            <h1>Form control in React Js</h1>
            <form onSubmit={handleForm}>
                <div className="input-box">
                    <input type="text" placeholder="your name" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    <input type="Email" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password" placeholder="Your Password"  value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <input type="submit" value="submit" />
                </div>
            </form>
            <div className="user-data">
                <h2>username:{username}</h2>
                <h2>Email:{email}</h2>
                <h2>Password:{password}</h2>
            </div>
        </div>
        </>
    );
}
export default Form;