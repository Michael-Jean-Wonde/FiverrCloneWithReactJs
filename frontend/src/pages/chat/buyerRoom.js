import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./chat";
import "./chatRoom.css";
import BuyerHeader from "../../components/buyerHeader";

const socket = io.connect("http://localhost:3001");

const BuyerRoom = () => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    const joinRoom = () => {
      if (userName !== "" && room !== "") {
        socket.emit("join_room", room);
        setShowChat(true);
      }
    };
  
    return (
        <div>
            <BuyerHeader />
        <br></br>
      <div className="room">
        {!showChat ? (
          <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} userName={userName} room={room} />
        )}
      </div>
      </div>
    );
}

export default BuyerRoom;