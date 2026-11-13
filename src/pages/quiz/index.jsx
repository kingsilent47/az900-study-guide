import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from '../../questions.json';
import ProgressBar from '../../components/ProgressBar';
import QuestionCard from '../../components/QuestionCard';

const STORAGE_KEY = 'az900-progress';

function Quiz() {
  const navigate = useNavigate();
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

  const saveProgress = (question, wasCorrect) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    let progress = {
      totalAnswered: 0,
      correct: 0,
      incorrect: 0,
      byTopic: {},
    };
    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch (e) {}
    }

    progress.totalAnswered += 1;
    if (wasCorrect) progress.correct += 1;
    else progress.incorrect += 1;

    const topic = question.topic || 'General';
    if (!progress.byTopic[topic]) {
      progress.byTopic[topic] = { total: 0, correct: 0 };
    }
    progress.byTopic[topic].total += 1;
    if (wasCorrect) progress.byTopic[topic].correct += 1;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
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
      saveProgress(currentQuestion, isCorrect);
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
          <button className="btn-secondary" onClick={() => navigate('/dashboard')}>
            View Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <button className="btn-back" onClick={() => navigate('/')}>
          <span className="arrow">←</span> Back
        </button>
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
      </header>

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
          className="btn-back-nav"
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

export default Quiz;
