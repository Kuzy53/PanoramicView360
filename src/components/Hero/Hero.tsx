import { Link } from 'react-scroll';

import play from '../../assets/icon/play-circle.svg';
import check from '../../assets/icon/Check.svg';

import { Panorama } from '../panorama';

import s from './hero.module.scss';

export const Hero = () => (
  <section className={s.hero_wrapper} id='Welcome'>
    <div className={s.content}>
      <div className={s.content_description}>
        <h1>Создавайте и Встраивайте Интерактивные Панорамные Экскурсии 360 с Panoramic View!</h1>
        <p className={s.subtitle}>
          Покажите ваше пространство так, как его увидит только ваш клиент! Панорамные 360°
          экскурсии – инновационный инструмент для демонстрации объектов недвижимости и коммерческих
          помещений.
        </p>
        <div className={s.content_button}>
          <Link
            smooth
            spy
            activeClass={s.active}
            className={s.partner}
            duration={500}
            offset={-70}
            to='ContactUs'
          >
            <img alt='icon play' src={play} />
            Стать партнером
          </Link>
          <button className={s.app} type='button'>
            Заказать сайт
          </button>
          <p>Закажи собственный сайт под ключ</p>
        </div>
      </div>
      <div className={s.checkItem}>
        <ul>
          <li>
            <img alt='icon check' src={check} />
            <span>Виртуальные Экскурсии для Продаж Недвижимости.</span>
          </li>
          <li>
            <img alt='icon check' src={check} />
            <span>Увеличьте Шансы на Сделку.</span>
          </li>
          <li>
            <img alt='icon check' src={check} />
            <span>Продемонстрируйте Недвижимость с Лучшей Стороны.</span>
          </li>
        </ul>
      </div>
    </div>
    <div className={s.intro_wrapper}>
      <Panorama initialPanoramaId='panoramaKitchen' />
    </div>
  </section>
);
