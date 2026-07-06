import "./Calculator.css";

import Display from "../Display/Display";
import Button from "../Button/Button";
import { useState } from "react";

function Calculator() {

    const [displayValue, setDisplayValue] = useState("")

    const handleClick = (value) => {
        if (displayValue === "ERROR") {
            setDisplayValue(value);
        } else {
            if (displayValue.length > 12 && displayValue.length <= 15) {
                document.querySelector('.display-screen').style.fontSize='30px';
            } else if (displayValue.length > 15 && displayValue.length <= 18) {
                document.querySelector('.display-screen').style.fontSize='25px';
            }  else if (displayValue.length > 18 && displayValue.length <= 22) {
                document.querySelector('.display-screen').style.fontSize='20px';
            }  else if (displayValue.length > 22) {
                document.querySelector('.display-screen').style.fontSize='15px';
            } else {
                document.querySelector('.display-screen').style.fontSize='36px';
            }
            setDisplayValue(displayValue + value);
        }
        
    };

    function calculate() {
        let ans;

        try {
            // Attempt to evaluate the expression
            ans = Function(`return ${displayValue}`)();
        } catch (error) {
            // Catch any syntax or runtime errors
            ans = "ERROR";
        }
        console.log(displayValue + " calculated, Answer= " + ans);
        setDisplayValue(ans);
    }

    function clear() {
        setDisplayValue("");
    }


    return (

        <div className="calculator">

            <Display value={displayValue} />

            <div className="button-grid">

                <Button value="C" className="clear-button" onClick={clear} />
                <Button value="(" className="operator-button" onClick={handleClick} />
                <Button value=")" className="operator-button" onClick={handleClick} />
                <Button value="/" className="operator-button" onClick={handleClick} />

                <Button value="7" className="number-button" onClick={handleClick} />
                <Button value="8" className="number-button" onClick={handleClick} />
                <Button value="9" className="number-button" onClick={handleClick} />
                <Button value="*" className="operator-button" onClick={handleClick} />

                <Button value="4" className="number-button" onClick={handleClick} />
                <Button value="5" className="number-button" onClick={handleClick} />
                <Button value="6" className="number-button" onClick={handleClick} />
                <Button value="-" className="operator-button" onClick={handleClick} />

                <Button value="1" className="number-button" onClick={handleClick} />
                <Button value="2" className="number-button" onClick={handleClick} />
                <Button value="3" className="number-button" onClick={handleClick} />
                <Button value="+" className="operator-button" onClick={handleClick} />

                <Button value="0" className="number-button" onClick={handleClick} />
                <Button value="." className="number-button" onClick={handleClick} />
                <Button value="=" className="equal-button" onClick={calculate} />

            </div>

        </div>

    );

}

export default Calculator;