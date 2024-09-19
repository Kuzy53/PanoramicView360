import { FC } from 'react';

import slide1bg1 from '../../../assets/img/slide1bg1.png';
import slide1bg2 from '../../../assets/img/slide1bg2.png';
import slide2bg1 from '../../../assets/img/slide2bg1.png';
import slide2bg2 from '../../../assets/img/slide2bg2.png';
import slide3bg1 from '../../../assets/img/slide3bg1.png';
import slide3bg2 from '../../../assets/img/slide3bg2.png';
import iphone from '../../../assets/img/iPhone.svg';

import s from '../howToUse.module.scss';

interface Sliderimg {
  currentSlide: number;
  isActive: boolean;
}

export const SliderImages: FC<Sliderimg> = ({ currentSlide, isActive }) => (
  <>
    {currentSlide === 1 && (
      <div className={s.animation_img}>
        {/* eslint-disable-next-line react/void-dom-elements-no-children */}
        <div
          className={
            isActive ? `${s.img_wrapper__left} ${s.animation_bg1}` : `${s.img_wrapper__left}`
          }
        >
          <img alt='iphone' className={s.slide1} src={iphone} />
          <img alt='SLide 1 background 1' className={`${s.slide1bg1}`} src={slide1bg1} />
        </div>
        <div
          className={
            isActive ? `${s.img_wrapper__right} ${s.animation_bg2}` : `${s.img_wrapper__right}`
          }
        >
          <img alt='iphone' className={s.slide2} src={iphone} />
          <img alt='SLide 1 background 2' className={`${s.slide1bg2}`} src={slide1bg2} />
        </div>
      </div>
    )}
    {currentSlide === 2 && (
      <div className={s.animation_img}>
        {/* eslint-disable-next-line react/void-dom-elements-no-children */}
        <div
          className={
            isActive ? `${s.img_wrapper__left} ${s.animation_bg1}` : `${s.img_wrapper__left}`
          }
        >
          <img alt='iphone' className={s.slide1} src={iphone} />
          <img alt='SLide 2 background 1' className={`${s.slide1bg1}`} src={slide2bg1} />
        </div>
        <div
          className={
            isActive ? `${s.img_wrapper__right} ${s.animation_bg2}` : `${s.img_wrapper__right}`
          }
        >
          <img alt='iphone' className={s.slide2} src={iphone} />

          <img alt='SLide 2 background 2' className={`${s.slide1bg2}`} src={slide2bg2} />
        </div>
      </div>
    )}
    {currentSlide === 3 && (
      <div className={s.animation_img}>
        {/* eslint-disable-next-line react/void-dom-elements-no-children */}
        <div
          className={
            isActive ? `${s.img_wrapper__left} ${s.animation_bg1}` : `${s.img_wrapper__left}`
          }
        >
          <img alt='iphone' className={s.slide1} src={iphone} />
          <img alt='SLide 3 background 1' className={`${s.slide1bg1}`} src={slide3bg1} />
        </div>
        <div
          className={
            isActive ? `${s.img_wrapper__right} ${s.animation_bg2}` : `${s.img_wrapper__right}`
          }
        >
          <img alt='iphone' className={s.slide2} src={iphone} />

          <img alt='SLide 3 background 2' className={`${s.slide1bg2}`} src={slide3bg2} />
        </div>
      </div>
    )}
  </>
);
