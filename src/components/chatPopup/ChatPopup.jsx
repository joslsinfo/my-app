import React, { useState } from "react";
import "./ChatPopup.css";

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // Logique pour envoyer le message
    console.log("Message envoyé:", message);
    setMessage("");
  };

  return (
    <div className="chat-popup">
      <button onClick={() => setIsOpen(!isOpen)} className="chat-button">
        {isOpen ? "Close Chat" : "Chat"}
      </button>
      {isOpen && (
        <div className="chat-window">
          <h2>Chat with us</h2>
          <div className="chat-content">
            <div className="message-area">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
              />
              <button onClick={handleSend} className="send-button">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
