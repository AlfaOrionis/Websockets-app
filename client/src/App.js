import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

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
