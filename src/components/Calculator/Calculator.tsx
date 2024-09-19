import { useState, ChangeEvent } from 'react';

import operating from '../../assets/icon/operating.svg';
import roi from '../../assets/icon/ROI.svg';
import expens from '../../assets/icon/expenses.svg';
import profitImg from '../../assets/icon/profit.svg';

import s from './calculator.module.scss';

export const Calculator = () => {
  const [stationsValue, setStationsValue] = useState(30);
  const [racksValue, setRacksValue] = useState(50);

  const expenses = (stationsValue * 350) + (racksValue * 35);
  const profit = stationsValue * 37;

  const handleChange = (event: ChangeEvent<HTMLInputElement>, type: string): void => {
    const value = Number(event.target.value);
    return type === 'stations' ? setStationsValue(value) : setRacksValue(value);
  };

  const getBackgroundStyle = (value: number, minValue: number, maxValue: number) => {
    const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
    return `linear-gradient(to right, rgba(255, 241, 85, 1) ${percentage}%, rgba(255,255,255,0.2) ${percentage}% 100%)`;
  };

  return (
    <section className={s.conteiner} id="Calculator">
      <div className={s.wrapper}>
        <div className={s.content}>
          <span className={s.badge}>Profit Calculator</span>
          <h2 className={s.title}>Forecast Your Financial Future!</h2>
          <p className={s.subtitle}>Get a glimpse of your potential earnings with our detailed calculator. Input your parameters and let the magic happen.</p>
        </div>
        <div className={s.calc}>
          <div className={s.calc__wrapper}>
            <h3 className={s.calc_title}>Number of stations</h3>
            <p className={s.calc_description}>In this case, stations with 8 Powerbanks are taken into account.</p>
            <div className={s.calc_slider}>
              <input
                max="300"
                min="10"
                step="10"
                style={{ background: getBackgroundStyle(stationsValue, 10, 300) }}
                type="range"
                value={stationsValue}
                onChange={(event) => handleChange(event, 'stations')}
              />
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '20px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-26px',
                    left: `${(stationsValue / 300) * 100}%`,
                    transform: 'translateX(-50%)',
                    marginLeft: stationsValue >= 200 ? '-55px' : '36px',
                    backgroundColor: 'rgb(103,103,103)',
                    color: 'rgba(255, 255, 255, 0.90)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.20)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    lineHeight: '18px',
                  }}
                >
                  {stationsValue}
                </div>
              </div>
            </div>
          </div>
          <div className={s.calc__wrapper}>
            <h3 className={s.calc_title}>Number of racks for the stations</h3>
            <p className={s.calc_description}>Racks are needed if you want to install the stations on the floor and not on, for example, a table</p>
            <div className={s.calc_slider}>
              <input
                max="300"
                min="10"
                step="10"
                style={{ background: getBackgroundStyle(racksValue, 10, 300) }}
                type="range"
                value={racksValue}
                onChange={(event) => handleChange(event, 'racks')}
              />
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '20px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-26px',
                    left: `${(racksValue / 300) * 100}%`,
                    transform: 'translateX(-50%)',
                    marginLeft: racksValue >= 200 ? '-55px' : '36px',
                    backgroundColor: 'rgb(103,103,103)',
                    color: 'rgba(255, 255, 255, 0.90)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.20)',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    lineHeight: '18px',
                  }}
                >
                  {racksValue}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.block__wrapper}>
        <div className={`${s.block} ${s.block1}`}>
          <img alt="icon operating" loading="lazy" src={operating} />
          <h4 className={s.block_title}>Operating margin</h4>
          <div className={s.block_price}>45%</div>
        </div>
        <div className={`${s.block} ${s.block2}`}>
          <img alt="icon roi" loading="lazy" src={roi} />
          <h4 className={s.block_title}>ROI</h4>
          <div className={s.block_price}>11%</div>
        </div>
        <div className={`${s.block} ${s.block3}`}>
          <img alt="icon expans" loading="lazy" src={expens} />
          <h4 className={s.block_title}>One-time expenses</h4>
          <div className={s.block_price}>
            {expenses}
            $
          </div>
        </div>
        <div className={`${s.block} ${s.block4}`}>
          <img alt="icon profit" loading="lazy" src={profitImg} />
          <h4 className={s.block_title}>Profit</h4>
          <div className={s.block_price}>
            {profit}
            $
            <span>/month</span>
          </div>
        </div>
      </div>
    </section>
  );
};
