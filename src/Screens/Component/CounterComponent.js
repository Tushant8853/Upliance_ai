import React, { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const calculateColor = () => {
    const greenValue = Math.min(255, counter * 10);
    const redValue = 255 - greenValue;
    return `rgb(${redValue}, ${greenValue}, ${redValue})`; 
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div style={{ ...styles.container ,background: calculateColor() }}>
      <h2 style={styles.counter}>{counter}</h2>
      <div style={styles.buttonContainer}>
        <button onClick={decrement} style={styles.button}>-</button>
        <button onClick={reset} style={styles.button}>Reset</button>
        <button onClick={increment} style={styles.button}>+</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    display: "flex", 
    gap: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
  },
  counter: {
    color: "blue",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
};

export default CounterComponent;
