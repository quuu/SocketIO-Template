import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App(props) {
  const socket = props.socket;

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    socket.emit("init", "", (ret) => {
      setConnected(ret.success);
    });
  });
  return <div className="App">Connected: {connected ? "true" : "false"}</div>;
}

export default App;
