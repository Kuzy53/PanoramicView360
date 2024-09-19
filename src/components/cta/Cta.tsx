import appStore from '../../assets/icon/appStore.svg';
import googlePlay from '../../assets/icon/googlePlay.svg';
import iphone from '../../assets/img/iphone.png';
import badge from '../../assets/img/ctaBadge.png';

import s from './cta.module.scss';

export const CTA = () => (
  <section className={s.conteiner} id="App">
    <div className={s.wrapper}>
      <div className={s.content}>
        <h3 className={s.title}>Panoramic View тебя ждет</h3>
        <p className={s.subtitle}>Готовы преобразить способ демонстрации вашего объекта? Попробуйте Panoramic View уже сегодня и откройте новые возможности для вашего бизнеса!</p>
        <div className={s.btns}>
        </div>
      </div>
      <div className={s.imgs}>
        <img alt="iphone" className={s.iphone} src={iphone} />
          <img alt="iphone2" className={s.iphone2} src={badge} />
        </div>
    </div>
  </section>
);

export default CTA;
