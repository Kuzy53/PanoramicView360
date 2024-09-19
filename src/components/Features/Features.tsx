import chargingCables from '../../assets/img/chargingCables.webp';
import box3 from '../../assets/img/gridBox3.webp';
import powerBankFront from '../../assets/img/chargemateFront.webp';
import powerBankBack from '../../assets/img/chargemateBack.webp';
import station from '../../assets/img/chargemateStation.webp';
import card from '../../assets/img/card.webp';
import shield from '../../assets/img/shield.webp';
import piggyBank from '../../assets/img/piggyBank.webp';
import ecoBulb from '../../assets/img/ecoBulb.webp';
import bolt from '../../assets/img/bolt.webp';

import s from './features.module.scss';

export const Features = () => (
  <section className={s.content} id='Benefits'>
    <div className={s.wrapper}>
      <span className={s.badge}>Join the Family</span>
      <h2 className={s.title}>Why You&apos;ll Love Being a Part of ChargeMate</h2>
      <p className={s.subtitle}>
        ChargeMate is more than a service, it&apos;s a community of people who value connectivity
        and convenience. Here&apos;s why our mates love us:
      </p>
    </div>
    <div className={s.grid}>
      <div className={`${s.gridBlock} ${s.box1}`}>
        <div className={s.textWrapper}>
          <span className={s.gridBadge}>Universal Compatibility</span>
          <h3 className={s.title}>One Charger, Multiple Devices</h3>
          <p className={s.description}>
            {/* eslint-disable-next-line max-len */}
            With three distinct wires - Type-C, Lightning, and Micro-USB, ChargeMate ensures your
            device, whatever the make or model, stays powered up.
          </p>
        </div>
        <div className={s.imgWrapper}>
          <img alt='charging cables' src={chargingCables} />
          <div className={s.darken} />
        </div>
      </div>
      <div className={`${s.gridBlock} ${s.box2} ${s.gridBlockText}`}>
        <span className={s.gridBadge}>Thriving Community</span>
        <div className={s.gridBlockTextwrapper}>
          <h3 className={s.title}>Join the ChargeMate Movement</h3>
          <p className={s.description}>
            Be part of an ever-growing community dedicated to making mobile charging accessible and
            efficient for all.
          </p>
        </div>
      </div>
      <div className={`${s.gridBlock} ${s.box3}`}>
        <img alt='app screen' loading='lazy' src={box3} />
      </div>
      <div className={`${s.gridBlock} ${s.box4}`}>
        <div className={s.gridBlockText}>
          <h3 className={s.title}>Pay Your Way, Effortlessly</h3>
          <p className={s.description}>
            From Apple Pay to major credit cards for your convenience.
          </p>
        </div>
        <img alt='card' loading='lazy' src={card} />
        <div className={s.darken} />
      </div>
      <div className={`${s.gridBlock} ${s.box5}`}>
        <img alt='powerBank back' loading='lazy' src={powerBankBack} />
        <img alt='powerBank front' loading='lazy' src={powerBankFront} />
      </div>
      <div className={`${s.gridBlock} ${s.box6} ${s.gridBlockText}`}>
        <span className={s.gridBadge}>User-Friendly App</span>
        <div className={s.gridBlockTextwrapper}>
          <h3 className={s.title}>Manage Your Charging On-the-Go</h3>
          <p className={s.description}>
            With the ChargeMate app, find stations, track your charging, and manage your account
            with ease.
          </p>
        </div>
      </div>
      <div className={`${s.gridBlock} ${s.box7}`}>
        <div className={s.gridBlockText}>
          <h3 className={s.title}>Affordable Charging</h3>
          <p className={s.description}>
            Explore plans designed to offer you maximum value and savings.
          </p>
        </div>
        <img alt='shield' src={piggyBank} />
        <div className={s.darken} />
      </div>
      <div className={`${s.gridBlock} ${s.box8} ${s.gridBlockText}`}>
        <span className={s.gridBadge}>Expanding Network</span>
        <div className={s.gridBlockTextwrapper}>
          <h3 className={s.title}>More Stations, More Convenience</h3>
          <p className={s.description}>
            Our network is rapidly expanding, ensuring you&apos;re never too far from a ChargeMate
            station.
          </p>
        </div>
      </div>
      <div className={`${s.gridBlock} ${s.box9}`}>
        <div className={s.gridBlockTextwrapper}>
          <span className={s.gridBadge}>Quick Charging Tech</span>
          <h3 className={s.title}>Power Up Fast</h3>
        </div>
        <img alt='bolt' src={bolt} />
        <div className={s.darken} />
      </div>
      <div className={`${s.gridBlock} ${s.box10}`}>
        <div className={s.textWrapper}>
          <span className={s.gridBadge}>Eco-Friendly Initiative</span>
          <h3 className={s.title}>Charging Towards a Greener Future</h3>
          <p className={s.description}>
            By using ChargeMate, you&apos;re supporting eco-friendly practices and reducing
            electronic waste.
          </p>
        </div>
        <div className={s.imgWrapper}>
          <img alt='charging cables' loading='lazy' src={ecoBulb} />
          <div className={s.darken} />
        </div>
      </div>
      <div className={`${s.gridBlock} ${s.box11}`}>
        <img alt='chargemate station' loading='lazy' src={station} />
      </div>
      <div className={`${s.gridBlock} ${s.box12}`}>
        <div className={s.gridBlockText}>
          <h3 className={s.title}>Pay Your Way, Effortlessly</h3>
          <p className={s.description}>
            Our devices are built with advanced safety features, ensuring your devices are protected
            while charging.
          </p>
        </div>
        <img alt='shield' loading='lazy' src={shield} />
        <div className={s.darken} />
      </div>
      <div className={`${s.gridBlock} ${s.box13} ${s.gridBlockText}`}>
        <span className={s.gridBadge}>24/7 Support</span>
        <div className={s.gridBlockTextwrapper}>
          <h3 className={s.title}>We&apos;ve Got Your Back, Always</h3>
          <p className={s.description}>
            Our dedicated support team is available round the clock to assist with any queries or
            issues.
          </p>
        </div>
      </div>
    </div>
  </section>
);
