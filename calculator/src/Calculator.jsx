import React, { useState } from "react";




const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
       
        setResult(eval(input).toString());
      } catch {
       
        setResult("Hata");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };
  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("AC")} className="btn-ac">
          AC
        </button>
        <button onClick={() => handleButtonClick("DEL")} className="btn-del">
          DEL
        </button>
        <button onClick={() => handleButtonClick("/")} className="btn-operator">
          /
        </button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")} className="btn-operator">
          *
        </button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")} className="btn-operator">
          -
        </button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")} className="btn-operator">
          +
        </button>
        <button onClick={() => handleButtonClick("0")} className="btn-zero">
          0
        </button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("=")} className="btn-equals">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
