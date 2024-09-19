import { FC } from 'react';

import s from '../howToUse.module.scss';

interface Progress {
  progress: number;
  currentSlide: number;
}

export const ProgressSlider: FC<Progress> = ({ progress, currentSlide }) => (
  <div>
    <div className={s.progressBar}>
      <div className={s.progress}>
        <div className={s.progressLine__wrapper}>
          {currentSlide === 1 && (
            <div className={`${s.progressLine} ${s.active}`} style={{ width: `${progress}%` }} />
          )}
        </div>
        <div className={s.progressLine__wrapper}>
          {currentSlide === 2 && (
            <div className={`${s.progressLine} ${s.active}`} style={{ width: `${progress}%` }} />
          )}
        </div>
        <div className={s.progressLine__wrapper}>
          {currentSlide === 3 && (
            <div className={`${s.progressLine} ${s.active}`} style={{ width: `${progress}%` }} />
          )}
        </div>
      </div>
    </div>
  </div>
);
