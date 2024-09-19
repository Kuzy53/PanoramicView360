import { FormEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import facebook from '../../assets/icon/facebook.svg';
import twiter from '../../assets/icon/twiter.svg';
import github from '../../assets/icon/github.svg';
import logoIcon from '../../assets/icon/logo_icon.svg';
import link from '../../assets/icon/link.svg';

import { sendMessage } from '../../services/api/SendMessage';

import s from './footer.module.scss';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedMessage = `<b>Footer: </b>\n
      <b>Email: </b>${email}\n`;

    sendMessage(formattedMessage).then((res) => {
      if (res.ok) {
        setEmail('');
        setIsSubmitted(true);
      }
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <footer className={s.conteiner}>
      <div className={s.wrapper}>
        <div className={s.top}>
          <div className={s.content}>
            <div className={s.text}>
              <h2 className={s.title}>Subscribe to our newsletter</h2>
              <p className={s.subtitle}>Get a summary of what we’ve shipped during the last month, behind the scenes updates, and team picks.</p>
            </div>
            <form className={s.subscribe} onSubmit={handleSubmit}>
              <input
                required
                id="email"
                name="Email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div className={s.links}>
            <Link to="/home"><img alt="Logo" className={s.icon} src={logoIcon} /></Link>
            <nav>
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/place-station">Place a Station</Link></li>
                <li><Link to="/partnership">Become a Partner</Link></li>
              </ul>
            </nav>
            <div className={s.social}>
              <a href="https://facebook.com" rel="noreferrer" target="_blank">
                <img alt="link facebook" src={facebook} />
              </a>
              <a href="https://twiter.com" rel="noreferrer" target="_blank">
                <img alt="link twiter" src={twiter} />
              </a>
              <a href="https://github.com" rel="noreferrer" target="_blank">
                <img alt="link github" src={github} />
              </a>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.copyright}>ChargeMate. All right reserved. © 2023</div>
          <div className={s.designer}>
            <p>Designed by </p>
            <a href="https://offthegridlab.com" rel="noreferrer" target="_blank">
              Off The Grid
              <img alt="link to designer website" src={link} />
            </a>
          </div>
        </div>
      </div>
      {isSubmitted
        && (
          <div className={s.formPopup}>
            <p>Your application has been successfully sent! We will contact you shortly.</p>
          </div>
        )}
    </footer>
  );
};
