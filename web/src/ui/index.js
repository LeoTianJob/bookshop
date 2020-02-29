import React, { useState, useEffect } from "react";

const MainUI = () => {
  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    const webSocket = new WebSocket("ws://localhost:8000/ws/orderbook/");
    setWs(webSocket);
  };

  useEffect(() => {
    console.log(ws);
    if (ws) {
      ws.onopen = () => {
        console.log("connected");
      };

      ws.onmessage = evt => {
        const message = JSON.parse(evt.data);
        console.log("message:");
        console.log(message);
      };

      ws.onerror = evt => {
        console.log("error");
        console.log(evt.message);
      };
    }
  });

  const sendMessage = () => {
    ws.send(JSON.stringify({ message: "From Web" }));
  };

  return (
    <div>
      <input type="button" value="連線" onClick={connectWebSocket} />
      <input type="button" value="送出訊息" onClick={sendMessage} />
    </div>
  );
};

export default MainUI;
