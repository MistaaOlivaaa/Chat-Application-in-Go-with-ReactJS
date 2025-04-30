import React, { Component } from "react";
import "./ChatHistory.scss";

class ChatHistory extends Component {
  render() {
    const messages = this.props.chatHistory.map((msg, index) => {
      const messageData = msg.data ? JSON.parse(msg.data) : { body: msg };
      const isCurrentUser = messageData.username === this.props.currentUser;
      
      return (
        <div 
          key={index} 
          className={`message-item ${isCurrentUser ? 'sent' : 'received'}`}
        >
          <div className="message-content">
            <div className="message-header">
              <span className="username">{messageData.username || 'Anonymous'}</span>
            </div>
            <p>{messageData.body}</p>
            <div className="message-footer">
              <span className="timestamp">
                {new Date(messageData.timestamp || Date.now()).toLocaleTimeString()}
              </span>
              {isCurrentUser && (
                <span className="status">
                  {messageData.status === 'sent' ? '✓' : '✓✓'}
                </span>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="chat-history">
        <h2>Chat Room</h2>
        <div className="messages-container">
          {messages.length === 0 ? (
            <p className="no-messages">No messages yet. Start chatting!</p>
          ) : (
            messages
          )}
        </div>
      </div>
    );
  }
}

export default ChatHistory; 