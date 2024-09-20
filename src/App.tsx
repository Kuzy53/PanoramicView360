import React, { lazy, Suspense, useEffect } from 'react';

import AnimatedCursor from 'react-animated-cursor';

import { Route, Routes } from 'react-router-dom';

import { useLocation } from 'react-router';

import { Header } from './components/Header/Header';

import s from './scss/app.module.scss';
import { Navigation } from './components/Navigation/navigation';
import { Home } from './Pages/Home';
import { Footer } from './components/footer/footer';

const About = lazy(() => import(/* webpackChunkName: "About" */ './Pages/AboutUs'));
const PlaceStation = lazy(
  () => import(/* webpackChunkName: "PlaceStation" */ './Pages/PutAStation')
);
const Partnership = lazy(
  () => import(/* webpackChunkName: "Partnership" */ './Pages/BecomeAPartner')
);
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ './Pages/NotFound'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <div className={s.App}>
    <div className={s.cursor_mob}>
      <AnimatedCursor
        color='255, 241, 85'
        innerScale={3}
        innerSize={20}
        outerAlpha={1}
        outerScale={0}
        outerSize={0}
        innerStyle={{
          mixBlendMode: 'difference',
        }}
      />
    </div>
    <div className={s.app_wrapper}>
      <Header />
      <Navigation />
      <ScrollToTop />
      <Suspense
        fallback={
          <div className={s.loader__wrapper}>
            <div className={s.loader} />
          </div>
        }
      >
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='/home' />
          <Route element={<About />} path='/about' />
          <Route element={<PlaceStation />} path='/place-station' />
          <Route element={<Partnership />} path='/partnership' />
          <Route element={<NotFound />} path='*' />
          {/* <Route element={} path="/privacy" /> */}
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  </div>
);

export default App;
