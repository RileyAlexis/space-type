import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TvScene from './components/scenes/TvScene';

function App() {

  const [message, setMessage] = useState('First Message');

  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        setMessage(response.data.message);
        console.log(response.data.message);
      })
  })

  return (
    <div className="App">
      <TvScene />
    </div>
  );
}

export default App;
