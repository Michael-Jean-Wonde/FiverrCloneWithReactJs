import React, { useState } from "react";
import io from "socket.io-client";
import Chat from "./chat";
import "./chatRoom.css";
import BuyerHeader from "../../components/buyerHeader";

import '../../utills/i18next';
import { useTranslation } from "react-i18next"; 

const socket = io.connect("http://localhost:3001");

const BuyerRoom = () => {
  const {t} = useTranslation();
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
            <h3>{t('joinChat')}</h3>
            <input
              type="text"
              placeholder={t('name')}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
            <input
              type="text"
              placeholder={t('crid')}
              onChange={(event) => {
                setRoom(event.target.value);
              }}
            />
            <button onClick={joinRoom}>{t('jcr')}</button>
          </div>
        ) : (
          <Chat socket={socket} userName={userName} room={room} />
        )}
      </div>
      </div>
    );
}

export default BuyerRoom;