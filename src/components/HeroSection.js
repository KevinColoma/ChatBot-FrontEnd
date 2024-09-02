import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const chatPanelRef = useRef(null);
  const textareaRef = useRef(null);

  const handleClick = () => {
    setShowChat(!showChat);
    if (!showChat) {
      if (isFirstOpen) {
        setMessages([...messages, { text: 'Hola, ¿cuál es tu duda?', sender: 'bot' }]);
        setIsFirstOpen(false);
      }
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 300);
    }
  };

  const handleClickOutside = (event) => {
    if (chatPanelRef.current && !chatPanelRef.current.contains(event.target)) {
      setShowChat(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
      const chatBody = chatPanelRef.current.querySelector('.chat-body');
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>CHATBOT ESPE</h1>
      <p>DUDAS?</p>
      <div className='hero-btns'>
        <button className='chatbot-btn' onClick={handleClick}>
          Chatbot
        </button>
        <div
          className={`chat-panel ${showChat ? 'show' : ''}`}
          ref={chatPanelRef}
        >
          <div className='chat-header'>
            <h2>Chatbot</h2>
            <button className='close-btn' onClick={handleClick}>X</button>
          </div>
          <div className='chat-body'>
            {messages.map((msg, index) => (
              <p key={index} className={msg.sender}>{msg.text}</p>
            ))}
          </div>
          <div className='chat-footer'>
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
