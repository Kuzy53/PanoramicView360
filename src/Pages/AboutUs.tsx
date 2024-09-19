import '../scss/index.scss';
import { FAQ } from '../components/faq/FAQ';
import questions from '../components/faq/data/aboutUs';

import left from '../assets/icon/left.svg';
import right from '../assets/icon/right.svg';
import { CTA } from '../components/cta/Cta';

const AboutUs = () => {
  const FAQBadge = 'The ChargeMate Experience';
  const FAQTitle = 'Every Charge, A Symphony of Perfection!';
  const FAQSubtitle = 'At ChargeMate, we believe charging isn\'t just a routine, it\'s an art. Dive into our world where technology dances with convenience, creating a masterpiece every time you plug in.';

  return (
    <div className="body-wrapper">
      <section className="about-block-wrapper" id="About">
        <div className="container-14">
          <div className="content-21">
            <div className="heading-and-supporting-text-9">
              <div className="heading-and-subheading-4">
                <div className="badge yellow">
                  <div className="text-26">About Us</div>
                </div>
                <div className="h1">Hello from ChargeMate! Where Every Charge Tells a Story.</div>
              </div>
              <div className="b1 white">
                Welcome to ChargeMate, where we believe in more than just charging devices. We
                believe in charging moments, memories, and milestones. Our mission? To ensure you&#x27;re always connected
                to what matters most.
              </div>
            </div>
            <div className="actions-5">
              <a className="button-16" href="/">
                <div className="text-md-semibold-6">Become a Partner</div>
              </a>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a
                className="button-17"
                rel="noreferrer"
                target="_blank"
              >
                <div className="text-md-semibold-7">Get the App</div>
              </a>
              <link href="/" rel="prerender" />
            </div>
          </div>
        </div>
        <div className="content-22">
          <iframe
            allow="autoplay"
            className="intro"
            frameBorder="0"
            loading="lazy"
            src="https://player.vimeo.com/video/854252725?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0"
            title="chargemate hero"
          />
        </div>
      </section>
      <section className="cta-section-5" id="Journey">
        <div className="container-37">
          <div className="content-60">
            <div className="content-61">
              <div className="heading-and-supporting-text-25">
                <div className="frame-512614">
                  <div className="h2 white">Crafted with Love, Powered by You!</div>
                  <div className="b1 white">
                    Dive into the ChargeMate journey, where innovation meets real-world needs.
                    Discover why we stand out in the crowded world of mobile charging, and how our unwavering commitment
                    to excellence has shaped our story from day one.
                  </div>
                </div>
                <div className="frame-512546">
                  <button className="button-35" type="button">
                    <div className="text-md-semibold-19">Become a Partner</div>
                  </button>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                  <a className="button-36" target="_blank">
                    <div className="text-md-semibold-20">Get the App</div>
                  </a>
                </div>
              </div>
              <div className="content-62">
                <div className="feature-text-12">
                  <div className="featured-icon-13">
                    <img
                      alt="icon Customer-Centric"
                      className="vectors-wrapper-51"
                      height="24"
                      loading="lazy"
                      src="https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64dcff131387586a9db3de3c_Vectors-Wrapper.svg"
                      width="24"
                    />
                  </div>
                  <div className="content-63">
                    <div className="text-and-supporting-text-17">
                      <div className="t1">Customer-Centric</div>
                      <div className="b2">
                        We&#x27;re like that friend who always has a charger handy. We&#x27;ve got
                        your back, ensuring you&#x27;re always in the loop, literally and figuratively!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-text-12">
                  <div className="featured-icon-13">
                    <img
                      alt="icon Innovative Spirit"
                      className="vectors-wrapper-51"
                      height="24"
                      loading="lazy"
                      src="https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64dcff13544a5573e6349e22_Vectors-Wrapper.svg"
                      width="24"
                    />
                  </div>
                  <div className="content-63">
                    <div className="text-and-supporting-text-17">
                      <div className="t1">Innovative Spirit</div>
                      <div className="b2">
                        We don&#x27;t just follow trends, we set them! Dive into the future of
                        charging with our cutting-edge tech and nifty innovations.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-text-12">
                  <div className="featured-icon-13">
                    <img
                      alt="icon Commitment to Quality"
                      className="vectors-wrapper-51"
                      height="24"
                      loading="lazy"
                      src="https://uploads-ssl.webflow.com/64263ed452f75186b182b2b0/64dcff1458312dfff6cf63ce_Vectors-Wrapper.svg"
                      width="24"
                    />
                  </div>
                  <div className="content-63">
                    <div className="text-and-supporting-text-17">
                      <div className="t1">Commitment to Quality</div>
                      <div className="b2">
                        For us, it&#x27;s not just about charging, it&#x27;s about charging right.
                        Experience the gold standard with ChargeMate.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-intro">
          <iframe
            allowFullScreen
            allow="autoplay; fullscreen; picture-in-picture"
            frameBorder="0"
            loading="lazy"
            src="https://player.vimeo.com/video/861339909?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0"
            title="chargemate hero"
          />
        </div>
      </section>
      <section className="about-block-wrapper-2" id="Experience">
        <div className="container">
          <div className="content-26">
            <div className="badge-h2-description">
              <div className="badge-h2 centered">
                <div className="badge">
                  <div className="about-badge">The ChargeMate Experience</div>
                </div>
                <div className="h2 white centered">Every Charge, A Symphony of Perfection!</div>
              </div>
              <div className="b1 white centered">
                At ChargeMate, we believe charging isn&#x27;t just a routine, it&#x27;s
                an art. Dive into our world where technology dances with convenience, creating a masterpiece every time
                you plug in.
              </div>
            </div>
          </div>
        </div>
        <div className="frame-512543">
          <div className="frame-512540">
            <img
              alt="Chargemate station"
              className="image-8"
              loading="lazy"
              src="https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd10d1e7512c2b7bcb604d_9c453d82feb41a24b4e3dc6c4784579d.png"
            />
          </div>
          <div className="frame-512542">
            <div className="frame-512600">
              <div className="text">Visible and informative charging stations</div>
              <div className="sf-2 arrow-left">
                <img alt="Left arrow" className="text-27" src={left} />
              </div>
            </div>
            <div className="frame-512539">
              <div className="sf-3 arrow-left">
                <img alt="Right arrow" className="text-27" src={right} />
              </div>
              <div className="text-28">Stylish and user-friendly mobile App</div>
            </div>
          </div>
          <div className="frame-512538">
            <img
              alt="Background with mobile app"
              className="image-9"
              loading="lazy"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 54vw, (max-width: 1439px) 100vw, 676px"
              src="https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd15ef13120d96db39103b_7e00a784daa9665f71814556319e287e.png"
              srcSet="https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd15ef13120d96db39103b_7e00a784daa9665f71814556319e287e-p-500.png 500w,
          https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd15ef13120d96db39103b_7e00a784daa9665f71814556319e287e-p-800.png 800w,
          https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd15ef13120d96db39103b_7e00a784daa9665f71814556319e287e-p-1080.png 1080w,
          https://uploads-ssl.webflow.com/61e98b87acba0c2257a9991c/64dd15ef13120d96db39103b_7e00a784daa9665f71814556319e287e.png 1352w"
            />
          </div>
        </div>
      </section>
      <FAQ
        badge={FAQBadge}
        faqData={questions}
        subtitle={FAQSubtitle}
        title={FAQTitle}
      />
      <CTA />
    </div>
  );
};

export default AboutUs;
