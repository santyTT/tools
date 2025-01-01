import React, { useState } from "react";
 // Agrega tu propio CSS para los estilos

function Calculator() {
  const [input, setInput] = useState(""); // Estado para el valor de la pantalla de la calculadora

  // Función para manejar clics de botones
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value); // Añadir el valor al input
  };

  // Función para evaluar la expresión matemática
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString()); // Evalúa la expresión y la convierte en string
    } catch (error) {
      setInput("Error"); // En caso de error (como división por 0)
    }
  };

  // Función para borrar el input
  const handleClear = () => {
    setInput(""); // Borra el input
  };

  return (
    <div className="calculator">
        <div className="calculator-container"> 
      <div className="calculator-display">
        <input type="text" value={input} readOnly /> {/* Pantalla de la calculadora */}
      </div>
      <div className="calculator-buttons">
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("/")}>/</button>
        
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={handleEvaluate}>=</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <button className="clear-button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

export default Calculator;
