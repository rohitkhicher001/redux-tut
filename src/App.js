import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, sqrNumber } from "./actions/index";

function App() {
  const mystate = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>welcome to redux</h1>
      <button onClick={() => dispatch(decNumber())}>-</button>
      <input type="text" name="quantity" value={mystate} />
      <button onClick={() => dispatch(incNumber())}>+</button>
      <button onClick={() => dispatch(sqrNumber())}>**</button>
    </div>
  );
}

export default App;
