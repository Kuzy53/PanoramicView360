import { FC } from 'react';

import s from '../howToUse.module.scss';

interface ButtonsProps {
  changeSlide: (slideNumber: number) => void;
  currentSlide: number;
}

const HEADERS = [
  'Зарегистрируйтесь и настройте свой профиль',
  'Создайте свой 360° тур',
  'Поделитесь туром с миром',
];

const BODY = [
  'Создание первого шага — это всего несколько кликов. Зарегистрируйтесь на платформе, создайте свой аккаунт и настройте профиль.',
  'Загрузите фотографии вашего объекта. Используйте инструменты платформы, чтобы создать интерактивный 360° тур, добавляя метки, описания и дополнительные элементы.',
  'Ваш интерактивный тур можно легко встроить на сайт недвижимости, отправить по электронной почте или поделиться в социальных сетях.',
];

export const SlideButtons: FC<ButtonsProps> = ({ changeSlide, currentSlide }) => (
  <div className={s.animation_description}>
    {window.innerWidth > 767 && (
      <>
        <button
          className={`${s.animation_description__wrapper} ${s.description1}`}
          type='button'
          onClick={() => changeSlide(1)}
        >
          <h4 className={s.animation_description__title}>{HEADERS[0]}</h4>
          <p className={s.animation_description__description}>{BODY[0]}</p>
        </button>
        <button
          className={`${s.animation_description__wrapper} ${s.description2}`}
          type='button'
          onClick={() => changeSlide(2)}
        >
          <h4 className={s.animation_description__title}>{HEADERS[1]}</h4>
          <p className={s.animation_description__description}>{BODY[1]}</p>
        </button>
        <button
          className={`${s.animation_description__wrapper} ${s.description3}`}
          type='button'
          onClick={() => changeSlide(3)}
        >
          <h4 className={s.animation_description__title}>{HEADERS[2]}</h4>
          <p className={s.animation_description__description}>{BODY[2]}</p>
        </button>
      </>
    )}
    {window.innerWidth <= 767 && currentSlide === 1 && (
      <button className={`${s.animation_description__wrapper} ${s.description1}`} type='button'>
        <h4 className={s.animation_description__title}>{HEADERS[0]}</h4>
        <p className={s.animation_description__description}>{BODY[0]}</p>
      </button>
    )}
    {window.innerWidth <= 767 && currentSlide === 2 && (
      <button className={`${s.animation_description__wrapper} ${s.description2}`} type='button'>
        <h4 className={s.animation_description__title}>{HEADERS[1]}</h4>
        <p className={s.animation_description__description}>{BODY[1]}</p>
      </button>
    )}
    {window.innerWidth <= 767 && currentSlide === 3 && (
      <button className={`${s.animation_description__wrapper} ${s.description3}`} type='button'>
        <h4 className={s.animation_description__title}>{HEADERS[2]}</h4>
        <p className={s.animation_description__description}>{BODY[2]}</p>
      </button>
    )}
  </div>
);
