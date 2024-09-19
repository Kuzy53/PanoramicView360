import call from '../../assets/icon/pricingCallMobile.png';


import s from './pricing.module.scss';

import Cays1 from '../../assets/img/Cays1.png';
import Cays2 from '../../assets/img/Cays2.png';
import Cays3 from '../../assets/img/Cays3.webp';


export const Pricing = () => (
  <section className={s.content} id="Pricing">
    <div className={s.wrapper}>
      <span className={s.badge}>PanoramicView 360</span>
      <h2 className={s.title}>Кейсы успешного использования</h2>
      <p className={s.subtitle}>
      Мы уже помогли нескольким владельцам недвижимости повысить привлекательность своих объектов и закрыть сделки быстрее.
      </p>
    </div>
    <div className={s.cardWrapper}>
      <div className={`${s.card} ${s.card1}`}>
        <img alt="Cays1" className={s.Cays} src={Cays1} />
        <button className={s.card_button} type="button">Подробнее</button>
      </div>
      <div className={`${s.card} ${s.card2}`}>
      <img alt="Cays2" className={s.Cays} src={Cays2} />
        <button className={s.card_button} type="button">Подробнее</button>
      </div>
      <div className={`${s.card} ${s.card3}`}>
      <img alt="Your Helper" className={s.call} src={call} />
      <img alt="Cays3" className={s.Cays} src={Cays3} />
        <button className={s.card_button} type="button">Подробнее</button>
      </div>
    </div>
  </section>
);
