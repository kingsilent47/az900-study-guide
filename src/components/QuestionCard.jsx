import React from 'react';
import { DOMAIN_BY_ID } from '../data/domains';
import { DomainChip } from './ui';
import { IconCheck, IconCross, IconFlag, IconBookmark } from './Icons';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function QuestionCard({
  item, index, total, selected, onToggle, revealed, correct,
  flagged, onFlag, bookmarked, onBookmark, explanation
}) {
  const domain = DOMAIN_BY_ID[item.domain];
  return (
    <article className="qcard" style={{ '--hue': domain ? domain.hex : 'var(--accent)' }}>
      <div className="qcard-top">
        <div className="qcard-meta">
          <DomainChip id={item.domain} small />
          <span className="qcard-index">Question {index + 1} of {total}</span>
          {item.multi ? <span className="qcard-multi">Select {item.answer.length}</span> : null}
        </div>
        <div className="qcard-tools">
          <button type="button" className={'tool' + (bookmarked ? ' is-on' : '')} onClick={onBookmark} aria-pressed={bookmarked} title="Bookmark this question">
            <IconBookmark width={16} height={16} />
          </button>
          <button type="button" className={'tool' + (flagged ? ' is-on' : '')} onClick={onFlag} aria-pressed={flagged} title="Flag for review">
            <IconFlag width={16} height={16} />
          </button>
        </div>
      </div>

      <h2 className="qcard-question">{item.question}</h2>

      <div className={'options' + (item.multi ? ' is-multi' : '')} role={item.multi ? 'group' : 'radiogroup'} aria-label="Answer options">
        {item.options.map((option, i) => {
          const isSelected = selected.includes(i);
          const isAnswer = item.answer.includes(i);
          let cls = 'option';
          if (isSelected) cls += ' is-selected';
          if (revealed && isAnswer) cls += ' is-correct';
          if (revealed && isSelected && !isAnswer) cls += ' is-wrong';
          return (
            <button
              key={i}
              type="button"
              className={cls}
              onClick={() => onToggle(i)}
              disabled={revealed}
              role={item.multi ? 'checkbox' : 'radio'}
              aria-checked={isSelected}
            >
              <span className="option-mark"><span className="option-letter">{LETTERS[i]}</span></span>
              <span className="option-text">{option}</span>
              {revealed && isAnswer ? <span className="option-icon ok"><IconCheck width={16} height={16} /></span> : null}
              {revealed && isSelected && !isAnswer ? <span className="option-icon no"><IconCross width={16} height={16} /></span> : null}
            </button>
          );
        })}
      </div>

      {revealed ? (
        <div className={'explain ' + (correct ? 'is-correct' : 'is-wrong')}>
          <div className="explain-head">
            <span className="explain-badge">{correct ? 'Correct' : 'Not correct'}</span>
            <span className="explain-key">
              Answer: {item.answer.map((a) => LETTERS[a]).join(', ')}
            </span>
          </div>
          <p className="explain-body">
            {explanation || 'No explanation was supplied with this question. Compare your answer with the key above and check the related Microsoft Learn module.'}
          </p>
        </div>
      ) : null}
    </article>
  );
}
