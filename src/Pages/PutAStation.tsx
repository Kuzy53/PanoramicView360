import { FAQ } from '../components/faq/FAQ';
import questions from '../components/faq/data/home';

import '../scss/index.scss';
import { Form } from '../components/Form/Form';
import { CTA } from '../components/cta/Cta';

import Cafes from '../assets/img/Cafe.webp';
import Office from '../assets/img/Offices.webp';
import Mall from '../assets/img/Gim.webp';
import Metro from '../assets/img/Center.webp';
import Main from '../assets/img/Main.webp';

const PutAStation = () => {
  const FAQBadge = 'Ответы на все вопросы';
  const FAQTitle = 'Panoramic View FAQs';
  const FAQSubtitle =
    'FAQ отвечает на важные вопросы, которые могут возникнуть у пользователей, и помогает создать полное представление о возможностях и удобстве использования платформы Panoramic View.';
  const formTitle = 'Place a Station';

  return (
    <div className='body-wrapper'>
      <section className='section' id='PlaceStation'>
        <div className='section-4'>
          <div className='container-25'>
            <div className='content-30'>
              <div className='heading-and-supporting-text-13'>
                <div className='heading-and-badge'>
                  <div className='badge-7'>
                    <div className='text-29'>Партнерам</div>
                  </div>
                  <div className='h1 centered'>Где можно использовать Panoramic View</div>
                </div>
                <div className='b1 white'>
                  Наши 360° панорамные туры помогают выделить пространство, повысить вовлеченность
                  клиентов и ускорить процесс принятия решений.
                </div>
              </div>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a className='button-19'>
                <div className='text-md-semibold-8'>Работать с Panoramic View</div>
              </a>
            </div>
          </div>
        </div>
        <div className='section-5'>
          <img
            alt='Double station'
            className='image'
            height='720'
            loading='lazy'
            src={Main}
            width='760'
          />
        </div>
      </section>
      <section className='features-section-2' id='Profit'>
        <div className='container-26'>
          <div className='content-31'>
            <div className='badge-h2-description'>
              <div className='badge-h2 centered'>
                <div className='badge-8'>
                  <div className='text-sm-medium-6'>Бесплатная поддержка</div>
                </div>
                <div className='h2 white centered'>Преимущества использования Panoramic View</div>
              </div>
              <div className='b1 white centered'>
                Наша платформа предлагает уникальные возможности, которые делают процесс
                демонстрации объектов недвижимости и других пространств проще, быстрее и
                эффективнее.
              </div>
            </div>
          </div>
        </div>
        <div className='content-32'>
          <div className='feature-text-2'>
            <div className='featured-icon-2'>
              <div className='line-chart-up-02'>
                <img
                  alt='Icon Boost Visitor Traffic'
                  className='vectors-wrapper-26'
                  height='18'
                  loading='lazy'
                  src='https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64e19dc6e248ff2dccffaac2_Vectors-Wrapper.svg'
                  width='18'
                />
              </div>
            </div>
            <div className='text-and-supporting-text-6'>
              <div className='t1'>Простота и интуитивность</div>
              <div className='b2'>
                Создавать 360° панорамные экскурсии на нашей платформе можно быстро и легко, без
                необходимости владеть сложными техническими навыками. Благодаря интуитивно понятному
                интерфейсу, любой пользователь может создать профессиональный тур за считанные
                минуты.
              </div>
            </div>
          </div>
          <div className='feature-text-2'>
            <div className='featured-icon-3'>
              <div className='thumbs-up'>
                <img
                  alt='Icon Enhance Customer Experience'
                  className='vectors-wrapper-27'
                  height='20'
                  loading='lazy'
                  src='https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64e19dc77aad86c685ad8667_Vectors-Wrapper.svg'
                  width='19.50381088256836'
                />
              </div>
            </div>
            <div className='text-and-supporting-text-6'>
              <div className='t1'>Увеличение продаж и доверия</div>
              <div className='b2'>
                Панорамные экскурсии позволяют потенциальным покупателям и арендаторам заранее
                осмотреть объекты в мельчайших деталях, что значительно повышает их уровень доверия
                к предложению.
              </div>
            </div>
          </div>
          <div className='feature-text-2'>
            <div className='featured-icon-2'>
              <div className='dataflow-01'>
                <img
                  alt='Icon Transparent Monitoring'
                  className='vectors-wrapper-28'
                  height='20'
                  loading='lazy'
                  src='https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64e19dc831ec2e1762f6af9e_Vectors-Wrapper.svg'
                  width='18'
                />
              </div>
            </div>
            <div className='text-and-supporting-text-6'>
              <div className='t1'>Гибкость и интеграция</div>
              <div className='b2'>
                Panoramic View легко интегрируется с различными сайтами, платформами и
                маркетплейсами. Вы можете встроить туры на свою страницу, делиться ими в социальных
                сетях или отправлять клиентам напрямую.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='cta-section-4' id='Gallery'>
        <div className='container-36'>
          <div className='content-54'>
            <div className='content-55'>
              <div className='heading-and-supporting-text-24'>
                <div className='frame-512612'>
                  <div className='badge'>
                    <div className='text-sm-medium-13'>Галерея</div>
                  </div>
                  <div className='h2 white'>Panoramic View в бизнесе</div>
                </div>
                <div className='b1 white'>
                  Панорамные туры идеально подходят для демонстрации жилой и коммерческой
                  недвижимости. Покупатели могут виртуально пройтись по дому или офису, оценить
                  планировку и детали, не выходя из дома.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='frame-512613'>
          <div className='content-56'>
            <img alt='Cafes' src={Cafes} />
            <div className='badge-17'>
              <div className='text-40'>Cafes</div>
            </div>
          </div>
          <div className='content-57'>
            <img alt='Shopping Malls' src={Mall} />
            <div className='badge-17'>
              <div className='text-sm-medium-14'>Shopping Malls</div>
            </div>
          </div>
        </div>
        <div className='frame-512613'>
          <div className='content-58'>
            <img alt='Offices' src={Office} />
            <div className='badge-17'>
              <div className='text-sm-medium-14'>Offices</div>
            </div>
          </div>
          <div className='content-59'>
            <img alt='Metro' src={Metro} />
            <div className='badge-18'>
              <div className='text-sm-medium-14'>Metro</div>
            </div>
          </div>
        </div>
      </section>
      <FAQ badge={FAQBadge} faqData={questions} subtitle={FAQSubtitle} title={FAQTitle} />
      <Form title={formTitle} />
      <CTA />
    </div>
  );
};

export default PutAStation;
