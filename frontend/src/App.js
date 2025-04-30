// App.js
import React, { Component } from "react";
import "./App.css";
import { connect, sendMsg } from "./api";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import EmojiPicker from 'emoji-picker-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: [],
      message: "",
      username: "User_" + Math.floor(Math.random() * 1000),
      showEmojiPicker: false
    };
    this.send = this.send.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.onEmojiClick = this.onEmojiClick.bind(this);
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message");
      this.setState(prevState => ({
        chatHistory: [...prevState.chatHistory, msg]
      }));
      console.log(this.state);
    });
  }

  send() {
    if (this.state.message.trim() !== "") {
      const messageData = {
        username: this.state.username,
        body: this.state.message,
        timestamp: new Date().toISOString(),
        status: 'sent'
      };
      console.log("Sending message:", messageData);
      sendMsg(JSON.stringify(messageData));
      this.setState({ message: "" });
    }
  }

  handleInput(e) {
    this.setState({ message: e.target.value });
  }

  handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.send();
    }
  }

  toggleEmojiPicker() {
    this.setState(prevState => ({
      showEmojiPicker: !prevState.showEmojiPicker
    }));
  }

  onEmojiClick(event, emojiObject) {
    this.setState(prevState => ({
      message: prevState.message + emojiObject.emoji
    }));
  }

  render() {
    return (
      <div className="App">
        <Header username={this.state.username} />
        <ChatHistory chatHistory={this.state.chatHistory} currentUser={this.state.username} />
        <div className="chat-input-container">
          {this.state.showEmojiPicker && (
            <div className="emoji-picker-container">
              <EmojiPicker onEmojiClick={this.onEmojiClick} />
            </div>
          )}
          <div className="chat-input">
            <button 
              className="emoji-button"
              onClick={this.toggleEmojiPicker}
            >
              😊
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={this.state.message}
              onChange={this.handleInput}
              onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.send}>Send Message</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



