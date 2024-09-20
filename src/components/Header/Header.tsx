/* eslint-disable max-len */
import { Link } from 'react-router-dom';

import { useState } from 'react';

import logo from '../../assets/icon/Logo.png';
import logoMini from '../../assets/icon/Logo-mini.svg';
import burger from '../../assets/icon/menuBurger.svg';
import chevronDown from '../../assets/icon/chevron-down.svg';
import x from '../../assets/icon/x-close.svg';

import s from './header.module.scss';

export const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenSubDropdown, setIsOpenSubDropdown] = useState(false);

  const openDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const openSubDropdown = () => {
    setIsOpenSubDropdown(!isOpenSubDropdown);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <Link to='/home'>
            <img alt='Logo' className={s.logoBig} src={logo} />
          </Link>
          <Link to='/home'>
            <img alt='Logo' className={s.logoMini} src={logoMini} />
          </Link>
          <h1>PanoramicView</h1>
        </div>
        <nav className={s.navigation}>
          <ul>
            <li>
              <Link className={s.link} to='/home'>
                Home
              </Link>
            </li>
            {/* <li><Link className={s.link} to="/about">About us</Link></li> */}
            <li className={s.dropdown_btn_wrapper}>
              <button className={s.dropdown_btn} type='button'>
                <span>Для партнеров</span>
                <img alt='dropdown button' className={s.chevronDown} src={chevronDown} />
              </button>
              <div className={s.dropdown_wrapper}>
                <div className={s.dropdown}>
                  <Link className={s.dropdown_link} to='/place-station'>
                    <svg
                      fill='none'
                      height='24'
                      viewBox='0 0 24 24'
                      width='24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z'
                        fill='#FFF155'
                      />
                      <path
                        d='M16.67 22.34C16.54 22.6 16.27 22.75 16 22.75C15.89 22.75 15.77 22.72 15.67 22.67L12 20.84L8.33001 22.67C8.23001 22.72 8.11001 22.75 8.00001 22.75C7.73001 22.75 7.46001 22.6 7.33001 22.34C7.14001 21.96 7.29001 21.51 7.67001 21.33L11.25 19.54V17H12.75V19.54L16.33 21.33C16.71 21.51 16.86 21.96 16.67 22.34Z'
                        fill='#FFF155'
                      />
                      <path
                        d='M3 2V14.1C3 16 4 17 5.9 17H18.1C20 17 21 16 21 14.1V2H3ZM16.98 8.58L13.83 11.21C13.54 11.45 13.17 11.55 12.82 11.49C12.46 11.43 12.15 11.21 11.96 10.89L10.91 9.14L7.98 11.58C7.84 11.7 7.67 11.75 7.5 11.75C7.29 11.75 7.07 11.66 6.92 11.48C6.65 11.16 6.7 10.69 7.02 10.42L10.17 7.79C10.46 7.55 10.83 7.45 11.18 7.51C11.54 7.57 11.85 7.79 12.04 8.11L13.09 9.86L16.02 7.42C16.34 7.15 16.81 7.2 17.08 7.52C17.34 7.84 17.3 8.31 16.98 8.58Z'
                        fill='#FFF155'
                      />
                    </svg>
                    <div>
                      <p className={s.dropdown_title}>Работать с нами</p>
                      <p className={s.dropdown_description}>
                        Какие плюсы работать с PanoramicView.
                      </p>
                    </div>
                  </Link>
                  {/* <Link className={s.dropdown_link} to="/partnership">
                    <svg
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z"
                        stroke="#FFF155"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>

                    <div>
                      <p className={s.dropdown_title}>Become a Partner</p>
                      <p className={s.dropdown_description}>Learn how our customers are making big changes.</p>
                    </div>
                  </Link> */}
                </div>
              </div>
            </li>
          </ul>
        </nav>
        <div className={s.navigation_mobile}>
          <button className={s.mobile_btn} type='button' onClick={() => openDropdown()}>
            <img alt='navigation burger' className={s.burger} src={isOpenDropdown ? x : burger} />
          </button>
          <nav
            className={
              isOpenDropdown ? `${s.mobile_dropdown} ${s.active_dropdown}` : `${s.mobileHidden}`
            }
          >
            <ul>
              <li>
                <Link to='/home' onClick={() => openDropdown()}>
                  Home
                </Link>
              </li>
              {/* <li>
                <Link to='/about' onClick={() => openDropdown()}>
                  About us
                </Link>
              </li> */}
              <li>
                <button className={s.dropdown_btn} type='button' onClick={() => openSubDropdown()}>
                  <span>Для партнеров</span>
                  <img
                    alt='dropdown button'
                    className={isOpenSubDropdown ? s.chevronDown : ''}
                    src={chevronDown}
                  />
                </button>
                {isOpenSubDropdown && (
                  <div className={s.dropdown_wrapper}>
                    <div className={s.dropdown}>
                      <Link
                        className={s.dropdown_link}
                        to='/place-station'
                        onClick={() => openDropdown()}
                      >
                        <svg
                          fill='none'
                          height='24'
                          viewBox='0 0 24 24'
                          width='24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M22 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H22C22.41 1.25 22.75 1.59 22.75 2C22.75 2.41 22.41 2.75 22 2.75Z'
                            fill='#FFF155'
                          />
                          <path
                            d='M16.67 22.34C16.54 22.6 16.27 22.75 16 22.75C15.89 22.75 15.77 22.72 15.67 22.67L12 20.84L8.33001 22.67C8.23001 22.72 8.11001 22.75 8.00001 22.75C7.73001 22.75 7.46001 22.6 7.33001 22.34C7.14001 21.96 7.29001 21.51 7.67001 21.33L11.25 19.54V17H12.75V19.54L16.33 21.33C16.71 21.51 16.86 21.96 16.67 22.34Z'
                            fill='#FFF155'
                          />
                          <path
                            d='M3 2V14.1C3 16 4 17 5.9 17H18.1C20 17 21 16 21 14.1V2H3ZM16.98 8.58L13.83 11.21C13.54 11.45 13.17 11.55 12.82 11.49C12.46 11.43 12.15 11.21 11.96 10.89L10.91 9.14L7.98 11.58C7.84 11.7 7.67 11.75 7.5 11.75C7.29 11.75 7.07 11.66 6.92 11.48C6.65 11.16 6.7 10.69 7.02 10.42L10.17 7.79C10.46 7.55 10.83 7.45 11.18 7.51C11.54 7.57 11.85 7.79 12.04 8.11L13.09 9.86L16.02 7.42C16.34 7.15 16.81 7.2 17.08 7.52C17.34 7.84 17.3 8.31 16.98 8.58Z'
                            fill='#FFF155'
                          />
                        </svg>
                        <div>
                          <p className={s.dropdown_title}>Работать с нами</p>
                          <p className={s.dropdown_description}>
                          Какие плюсы работать с PanoramicView.
                          </p>
                        </div>
                      </Link>
                      {/* <Link
                        className={s.dropdown_link}
                        to='/partnership'
                        onClick={() => openDropdown()}
                      >
                        <svg
                          fill='none'
                          height='24'
                          viewBox='0 0 24 24'
                          width='24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M4.5 22V17M4.5 7V2M2 4.5H7M2 19.5H7M13 3L11.2658 7.50886C10.9838 8.24209 10.8428 8.60871 10.6235 8.91709C10.4292 9.1904 10.1904 9.42919 9.91709 9.62353C9.60871 9.8428 9.24209 9.98381 8.50886 10.2658L4 12L8.50886 13.7342C9.24209 14.0162 9.60871 14.1572 9.91709 14.3765C10.1904 14.5708 10.4292 14.8096 10.6235 15.0829C10.8428 15.3913 10.9838 15.7579 11.2658 16.4911L13 21L14.7342 16.4911C15.0162 15.7579 15.1572 15.3913 15.3765 15.0829C15.5708 14.8096 15.8096 14.5708 16.0829 14.3765C16.3913 14.1572 16.7579 14.0162 17.4911 13.7342L22 12L17.4911 10.2658C16.7579 9.98381 16.3913 9.8428 16.0829 9.62353C15.8096 9.42919 15.5708 9.1904 15.3765 8.91709C15.1572 8.60871 15.0162 8.24209 14.7342 7.50886L13 3Z'
                            stroke='#FFF155'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                          />
                        </svg>

                        <div>
                          <p className={s.dropdown_title}>Become a Partner</p>
                          <p className={s.dropdown_description}>
                            Learn how our customers are making big changes.
                          </p>
                        </div>
                      </Link> */}
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
        <div className={s.actions}>
          <a className={s.actions_contact} href='#ContactUs' type='button'>
            <span>Contact Us</span>
          </a>
          <button className={s.actions_app} type='button'>
            <span>Get Start</span>
          </button>
        </div>
      </div>
    </header>
  );
};
