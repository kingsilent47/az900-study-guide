import React, { useState } from 'react';
import questionsData from './questions.json';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';

function App() {
  const [activeQuestions, setActiveQuestions] = useState(questionsData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isShuffleEnabled, setIsShuffleEnabled] = useState(false);
  const [mistakes, setMistakes] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const currentQuestion = activeQuestions[currentIndex];

  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const toggleShuffle = () => {
    const newShuffleState = !isShuffleEnabled;
    setIsShuffleEnabled(newShuffleState);
    if (newShuffleState) {
      setActiveQuestions(shuffleArray(questionsData));
    } else {
      setActiveQuestions(questionsData);
    }
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelect = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
    }
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    if (!isAnswered) {
      const isCorrect = Array.isArray(currentQuestion.answer)
        ? currentQuestion.answer.includes(selectedOption)
        : currentQuestion.answer === selectedOption;

      if (isCorrect) {
        setScore(score + 1);
      } else {
        if (!mistakes.find((q) => q.id === currentQuestion.id)) {
          setMistakes([...mistakes, currentQuestion]);
        }
      }
      setIsAnswered(true);
      return;
    }

    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0 && !isAnswered) {
      setCurrentIndex(currentIndex - 1);
      setSelectedOption(null);
    }
  };

  const startReviewMode = () => {
    if (mistakes.length === 0) return;
    setActiveQuestions(mistakes);
    setIsReviewMode(true);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleRestart = () => {
    setActiveQuestions(isShuffleEnabled ? shuffleArray(questionsData) : questionsData);
    setIsReviewMode(false);
    setMistakes([]);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / activeQuestions.length) * 100);
    return (
      <div className="app-container">
        <div className="results-container">
          <h1>{isReviewMode ? 'Review Complete' : 'Quiz Complete'}</h1>
          <div className="results-score">{score} / {activeQuestions.length}</div>
          <div className="results-message">
            {percentage >= 80 
              ? 'Excellent work. You are well prepared for the AZ-900 exam.' 
              : percentage >= 70 
              ? 'Good performance. Review the explanations for questions you missed.' 
              : 'Continue studying. Focus on the areas where you struggled.'}
          </div>
          <div className="results-actions">
            {mistakes.length > 0 && !isReviewMode && (
              <button className="btn-review" onClick={startReviewMode}>
                Review {mistakes.length} Mistakes
              </button>
            )}
            <button className="btn-restart" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="controls-container">
        <label className="shuffle-toggle">
          <input 
            type="checkbox" 
            checked={isShuffleEnabled} 
            onChange={toggleShuffle} 
          />
          Shuffle Questions
        </label>
        {isReviewMode && (
          <span className="review-badge">Reviewing Mistakes</span>
        )}
      </div>

      <ProgressBar currentIndex={currentIndex} totalQuestions={activeQuestions.length} />
      
      <div className="question-counter">
        <div className="counter-line"></div>
        <div className="counter-text">Question {currentIndex + 1} of {activeQuestions.length}</div>
        <div className="counter-line"></div>
      </div>

      <QuestionCard 
        question={currentQuestion}
        selectedOption={selectedOption}
        isAnswered={isAnswered}
        onSelect={handleSelect}
      />

      <div className="navigation">
        <button 
          className="btn-back" 
          onClick={handleBack} 
          disabled={currentIndex === 0 || isAnswered}
        >
          <span className="arrow">←</span> Back
        </button>
        <button 
          className="btn-next" 
          onClick={handleNext} 
          disabled={selectedOption === null}
        >
          {isAnswered && currentIndex === activeQuestions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default App;