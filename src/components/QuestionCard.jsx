import React from 'react';

function QuestionCard({ question, selectedOption, isAnswered, onSelect }) {
  const isCorrect = selectedOption === question.answer;

  return (
    <div className="question-card">
      <h2 className="question-text">{question.question}</h2>
      
      <div className="options-list">
        {question.options.map((option, index) => {
          let itemClass = 'option-item';
          if (selectedOption === index) itemClass += ' selected';
          if (isAnswered && index === question.answer) itemClass += ' correct';
          if (isAnswered && selectedOption === index && index !== question.answer) itemClass += ' incorrect';

          return (
            <div 
              key={index} 
              className={itemClass} 
              onClick={() => !isAnswered && onSelect(index)}
            >
              <div className="radio-outer">
                <div className="radio-inner"></div>
              </div>
              <span className="option-text">{option}</span>
            </div>
          );
        })}
      </div>

      {isAnswered && (
        <div className={`explanation-box ${isCorrect ? 'correct' : 'incorrect'}`}>
          <div className="explanation-title">{isCorrect ? 'Correct' : 'Incorrect'}</div>
          <div className="explanation-text">{question.explanation}</div>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;