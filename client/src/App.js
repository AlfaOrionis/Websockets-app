import React, { useState, useEffect, useRef } from "react";
import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:3001");

const App = () => {
  //REF
  const inputRef = useRef();

  //STATE
  const [statements, setStatements] = useState([]);

  console.log("LOADING APP");

  //USE EFFECT
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("SOCKET");
      setStatements(data.statements);
    });
  }, []);

  //SUBMIT HANDLER
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("api/users/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        //So i am just taking the statements array, and adding a new one
        statements: [
          ...statements,
          inputRef.current.value ? inputRef.current.value : "",
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setStatements(data.statements);
      });
  };

  return (
    <div>
      <ul>{statements && statements.map((stt) => <li>{stt}</li>)}</ul>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input id="input" autocomplete="off" ref={inputRef} />
        <button onClick={submitHandler}>Send</button>
      </form>
    </div>
  );
};

export default App;
