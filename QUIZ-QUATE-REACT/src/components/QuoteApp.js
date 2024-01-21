import React, { useState } from 'react';
import quotesData from '../utils/quotes';
import './styles.css';

const QuoteApp = () => {
  const [currentQuote, setCurrentQuote] = useState({ text: '', author: '' });

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    const selectedQuote = quotesData[randomIndex];
    setCurrentQuote({ text: selectedQuote.text, author: selectedQuote.author });
  };

  return (
    <div className="container">
      <h1>Твоя удача на сегодня</h1>
      <p>{currentQuote.text}</p>
      <p>- {currentQuote.author}</p>
      <button onClick={getRandomQuote}>Фраза твоего дня</button>
    </div>
  );
};

export default QuoteApp;