import React, { useState } from 'react';

import './style.css';
const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'What is the capital of Japan?',
      options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
      correctAnswer: 'Tokyo',
    },
    {
      id: 2,
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
      correctAnswer: 'William Shakespeare',
    },
    {
      id: 3,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      id: 4,
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
      id: 5,
      question: 'Who is known as the "Father of Computer Science"?',
      options: ['Bill Gates', 'Alan Turing', 'Ada Lovelace', 'Steve Jobs'],
      correctAnswer: 'Alan Turing',
    },
    {
      id: 6,
      question: 'Which year did the Titanic sink?',
      options: ['1905', '1912', '1920', '1931'],
      correctAnswer: '1912',
    },
    {
      id: 7,
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Fe', 'Cu'],
      correctAnswer: 'Au',
    },
    {
      id: 8,
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      id: 9,
      question: 'In which year did World War II end?',
      options: ['1943', '1945', '1950', '1960'],
      correctAnswer: '1945',
    },
    {
      id: 10,
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
      correctAnswer: 'Pacific Ocean',
    },
  ];
  

  const handleOptionChange = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    questions.forEach((question) => {
      const userAnswer = userAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleShowResults = () => {
    const correctAnswersCount = calculateCorrectAnswers();
    alert(`Поздравляю ${correctAnswersCount} с ${questions.length} правильно!`);
  };

  if (quizCompleted) {
    return (
      <div>
        <h1>Ты это сделал!</h1>
        <button onClick={handleShowResults}>Твои результаты Трудяжка</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.options.map((option) => (
          <li key={option}>
            <label>
              <input
                type="radio"
                name={`question_${currentQuestion.id}`}
                value={option}
                checked={userAnswers[currentQuestion.id] === option}
                onChange={() => handleOptionChange(currentQuestion.id, option)}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Ещё вопросик</button>
    </div>
  );
};

export default QuizApp;
