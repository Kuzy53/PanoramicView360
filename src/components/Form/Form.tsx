import intlTelInput from 'intl-tel-input';

import { useRef, useEffect, useState, FormEvent, FC, ChangeEvent } from 'react';

import { sendMessage } from '../../services/api/SendMessage';

import form from '../../assets/img/forme.webp';

import s from './form.module.scss';

import './tel.scss';

interface formProps {
  isPopup?: boolean;
  title: string;
}

export const Form: FC<formProps> = ({ isPopup, title }) => {
  const phoneInputRef = useRef<HTMLInputElement | null>(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('+1');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const onlyNumbers = inputValue.replace(/[^-+\d]+/g, '');
    setPhone(onlyNumbers);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formattedMessage = `<b>${title}: </b>\n
      <b>First Name: </b>${firstName}\n
      <b>Last Name: </b>${lastName}\n
      <b>City: </b>${city}\n
      <b>Phone: </b>${phone}\n
      <b>Email: </b>${email}\n`;

    sendMessage(formattedMessage).then((res) => {
      if (res.ok) {
        setFirstName('');
        setLastName('');
        setCity('');
        setPhone('');
        setEmail('');
        setIsSubmitted(true);
      }
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  useEffect(() => {
    const inputElement = phoneInputRef.current;
    if (inputElement !== null) {
      intlTelInput(inputElement, {
        preferredCountries: ['ua', 'ru', 'us'],
        nationalMode: false,
        initialCountry: 'ru',
        placeholderNumberType: 'FIXED_LINE_OR_MOBILE',
        autoInsertDialCode: true,
      });
    }
  }, []);

  return (
    <section className={`${s.form__wrapper} ${isPopup ? s.popup : ''}`} id='ContactUs'>
      <div className={s.form}>
        <h2 className={s.form_title}>
          Хотите воспользоваться Panoramic View? Тогда свяжитесь с нами.
        </h2>
        <p className={s.form_subtitle}>
          Если есть вопросы, свяжитесь с нами! Наша техподдержка работает постоянно.
        </p>
        <form onSubmit={handleSubmit}>
          <h4>Персональная информация</h4>
          <div className={s.form_personal}>
            <label className={s.form_firstname} htmlFor='firstName'>
              <input
                required
                id='firstName'
                name='First Name'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className={s.form_lastname} htmlFor='lastName'>
              <input
                required
                id='lastName'
                name='Last Name'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className={s.form_city} htmlFor='city'>
              <input
                required
                id='city'
                name='City'
                placeholder='City'
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
          </div>
          <h4>Contact information</h4>
          <div className={s.form_contact}>
            <input
              ref={phoneInputRef}
              required
              inputMode='tel'
              name='Phone'
              type='tel'
              value={phone}
              onChange={handleChange}
            />
            <label className={s.form_email} htmlFor='email'>
              <input
                required
                id='email'
                name='Email'
                placeholder='Email Address'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className={s.form_checkbox__wrapper}>
            <div className={s.custom_checkbox__wrapper}>
              <input required className={s.custom_checkbox} id='agree' type='checkbox' />
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className={s.form_checkbox} htmlFor='agree' />
            </div>
            <div className={s.form_checkbox__agree}>
              You agree to our friendly{' '}
              <a href='agree' target='_blank'>
                privacy policy
              </a>
              .
            </div>
          </div>
          <button className={s.form_btn} type='submit'>
            Send message
          </button>
        </form>
      </div>

      {!isPopup && (
        <div className={s.image}>
          <img alt='chargemate station mini 8' className={s.formImage} src={form} />
        </div>
      )}

      {isSubmitted && (
        <div className={s.formPopup}>
          <p>Your application has been successfully sent! We will contact you shortly.</p>
        </div>
      )}
    </section>
  );
};
