import React, { useState } from "react";
import openSocket, { io } from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState("");
  const [recievedMessage, setRecieved] = useState("");

  // const socket = openSocket("http://localhost:3001");
  // socket.on("message", (data) => {
  //   if (data.action === "message") {
  //     console.log("DZIALA DZIALA");
  //   }
  // });
  const socket = io("ws://localhost:3001");

  socket.on("message", (data) => console.log(data.message));

  const sendMessageHandler = (e) => {
    e.preventDefault();
    fetch("api/users/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRecieved(data.message);
        socket.emit("message", message);
      });
  };

  return (
    <div>
      <p>{recievedMessage}</p>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input
          id="input"
          autocomplete="off"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessageHandler}>Send</button>
      </form>
    </div>
  );
};

export default App;
