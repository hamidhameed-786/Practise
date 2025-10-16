import { useEffect } from "react";
import "./textEffect.css";

function TextEffect(){
    useEffect(()=>{
        console.log("your data run successuly");
    });
    return(
        <>
        <div className="box">
            <h3>this is effect</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, consequatur!</p>
            <h1>this is effect </h1>


        </div>
        </>
    );
}
export default TextEffect;