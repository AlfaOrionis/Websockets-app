import React, { useState, useEffect } from "react";
import openSocket from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    openSocket("http://localhost:3000");
  });

  return (
    <div>
      <p>{message}</p>
      <ul id="messages"></ul>
      <form id="form" action="">
        <input
          id="input"
          autocomplete="off"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default App;
