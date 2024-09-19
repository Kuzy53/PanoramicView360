import { FC } from 'react';

import Open from '../../../assets/icon/plus-circle.svg';
import Closed from '../../../assets/icon/minus-circle.svg';

import s from './question.module.scss';

interface QuestionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
  idx: number;
  prev: number;
}

export const Question: FC<QuestionProps> = ({
  question, answer, isOpen, toggleOpen, idx, prev,
}) => (
  <div className={`${s.item} ${isOpen ? s.open : ''} ${idx === prev ? s.slideUp : ''}`}>
    <button className={s.accordionHeader} type="button" onClick={toggleOpen}>
      <img alt={isOpen ? 'Closed' : 'Open'} src={isOpen ? Closed : Open} />
      <h3>{question}</h3>
    </button>
    <div className={s.accordionContent}>{answer}</div>
  </div>
);
