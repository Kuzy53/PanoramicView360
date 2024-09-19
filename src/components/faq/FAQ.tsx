import { FC, useState } from 'react';

import { nanoid } from 'nanoid';

import { useLocation } from 'react-router-dom';

import { Link } from 'react-scroll';

import { Popup } from '../popup/Popup';

import { Question } from './question/question';

import s from './faq.module.scss';

import { FAQProps } from './data/types';

export const FAQ: FC<FAQProps> = ({
  faqData, badge, title, subtitle,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleQuestion = (idx: number) => {
    setCurrentQuestion(idx === currentQuestion ? -1 : idx);
    setPrevQuestion(currentQuestion);
  };

  const showMore = () => {
    setIsOpen(true);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section className={s.content} id="FAQ">
      <div className={s.wrapper}>
        <span className={s.badge}>{badge}</span>
        <h2 className={s.title}>{title}</h2>
        <p className={s.subtitle}>
          {subtitle}
        </p>
      </div>
      <div className={s.faq_container}>
        <div className={s.faq__column}>
          {faqData.slice(0, 6).map((question, idx) => (
            <Question
              key={nanoid()}
              answer={question.answer}
              idx={idx}
              isOpen={idx === currentQuestion}
              prev={prevQuestion}
              question={question.question}
              toggleOpen={() => toggleQuestion(idx)}
            />
          ))}
        </div>
        <div className={isOpen ? `${s.faq__column} ${s.full_column}` : `${s.faq__column}`}>
          {faqData.slice(6).map((question, idx) => (
            <Question
              key={nanoid()}
              answer={question.answer}
              idx={idx + 6}
              isOpen={idx + 6 === currentQuestion}
              prev={prevQuestion}
              question={question.question}
              toggleOpen={() => toggleQuestion(idx + 6)}
            />
          ))}
        </div>
        <div className={isOpen ? `${s.open}` : `${s.more}`}>
          <button type="button" onClick={() => showMore()}>
            Show more
            <svg
              fill="none"
              height="20"
              viewBox="0 0 21 20"
              width="21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.71423 7.5L10.7142 12.5L15.7142 7.5"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.9"
                strokeWidth="1.66667"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={s.faq_bottom} id="FaqContact">
        <div className={s.faq_bottom__wrapper}>
          <span className={s.faq_bottom__title}>Остались вопросы?</span>
          <p className={s.faq_bottom__subtitle}>Вы можете обратиться с вопросами к нашей команде.</p>
        </div>
        {pathname === '/about' ? (
          <button
            className={s.faq_bottom__btn}
            type="button"
            onClick={handleOpenPopup}
          >
            Contact Us
          </button>
        )
          : (
            <Link
              smooth
              spy
              className={s.faq_bottom__btn}
              duration={500}
              offset={-70}
              to="ContactUs"
            >
              Contact Us
            </Link>
          )}

        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
    </section>
  );
};
