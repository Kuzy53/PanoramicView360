import s from './howToUse.module.scss';
import { Slider } from './Slider/Slider';

export const HowToUse = () => (
  <section className={s.content} id='HowToUse'>
    <div className={s.wrapper}>
      <span className={s.badge}>Проапгрейдь свой бизнес</span>
      <h2 className={s.title}>Ваш путь к созданию 360° виртуальных туров</h2>
      <p className={s.subtitle}>
        Panoramic View делает процесс создания и внедрения интерактивных панорамных экскурсий
        простым и интуитивным. В несколько шагов вы сможете преобразить представление о вашей
        недвижимости и повысить шансы на успешные сделки. Вот как это работает:
      </p>
    </div>
    <div className={s.animation_container}>
      <Slider />
    </div>
  </section>
);
