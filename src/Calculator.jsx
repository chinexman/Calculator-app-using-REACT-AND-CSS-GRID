import React from 'react'
import { useState } from "react";
import * as math from "mathjs";



export default function Calculator() {
    const [operand, setOperand] = useState("");
    const [compute, setCompute] = useState("");

    function handleClick(e){
        console.log(e);

        setOperand((operand) => {
            console.log(operand)
            // let newStr = operand.replace(',', '');
            // console.log(newStr)
           let arr = [...operand, e + ""]
            return arr.join("")});
    }

    function computeResult(){

        const input = operand; 
      console.log(input)
      console.log(math.evaluate(input))
        setCompute(math.evaluate(input));
      };
    
      function clear(){
        setOperand("");
        setCompute("");
      };
    return (
        <div>
           

            <div className="container">
                 <input  className = "button1" value={compute} ></input>
                 <input  className = "button1" value={operand}></input>

            <button className="button2"onClick={() => clear()} > clear</button>
            <button className="buttonoperator" onClick={() => handleClick("/")}> /</button>
            <button className="button"  onClick={() => handleClick(7)}> 7</button>
            <button className="button"  onClick={() => handleClick(8)}> 8</button>
            <button className="button" onClick={() => handleClick(9)}> 9</button>
            <button className="buttonoperator"onClick={() => handleClick("-")}> -</button>
            <button className="button" onClick={() => handleClick(4)}>4</button>
            <button className="button" onClick={() => handleClick(5)}> 5</button>
            <button className="button" onClick={() => handleClick(6)}> 6</button>
            <button className="buttonoperator" onClick={() => handleClick("+")}> +</button>
            <button className="button" onClick={() => handleClick(1)}> 1</button>
            <button className="button" onClick={() => handleClick(2)}> 2</button>
            <button className="button" onClick={() => handleClick(3)}> 3</button>
            <button className="buttonoperator" onClick={() => computeResult()}> =</button>



            </div>
        </div>
    )
}
