import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    setMessages([...messages, { role: 'user', content: prompt }]);
    try {
      const res = await axios.post('https://mini-ai-uvzl.onrender.com', { prompt });
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: res.data.response }
      ]);
      setPrompt('');
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Error: Unable to get response.' }
      ]);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>MINI-AI</h2>
      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.role === 'user' ? '#DCF8C6' : '#E6E6E6',
            }}
          >
            <b>{msg.role === 'user' ? 'You' : 'MINI'}: </b>
            {msg.content}
          </div>
        ))}
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          disabled={loading}
          style={styles.input}
          placeholder="Type your message..."
          onKeyDown={e => e.key === 'Enter' && sendPrompt()}
        />
        <button
          onClick={sendPrompt}
          disabled={loading}
          style={styles.button}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '90%',
    maxWidth: 500,
    margin: '30px auto',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ddd',
    borderRadius: 8,
    padding: 20,
    backgroundColor: '#fafafa',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  chatBox: {
    height: 350,
    overflowY: 'auto',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    border: '1px solid #ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  message: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 12,
    boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
  },
  inputArea: {
    display: 'flex',
  },
  input: {
    flexGrow: 1,
    padding: 10,
    borderRadius: 6,
    border: '1px solid #ccc',
    marginRight: 8,
    fontSize: 16,
  },
  button: {
    padding: '10px 16px',
    fontSize: 16,
    borderRadius: 6,
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  }
};

export default Chat;
