import { Hero } from '../components/Hero/Hero';
import { HowToUse } from '../components/HowToUse/HowToUse';
import { Pricing } from '../components/Pricing/Pricing';
import { FAQ } from '../components/faq/FAQ';
import { Form } from '../components/Form/Form';
import { CTA } from '../components/cta/Cta';
import { Features } from '../components/Features/Features';

import questions from '../components/faq/data/home';

export const Home = () => {
  const FAQBadge = 'All Your Questions Answered';
  const FAQTitle = 'Panoramic View FAQs';
  const FAQSubtitle = 'FAQ отвечает на важные вопросы, которые могут возникнуть у пользователей, и помогает создать полное представление о возможностях и удобстве использования платформы Panoramic View.';
  const formTitle = 'Home';

  return (
    <>
      <Hero />
      <HowToUse />
      {/* <Features /> */}
      <Pricing />
      <FAQ
        badge={FAQBadge}
        faqData={questions}
        subtitle={FAQSubtitle}
        title={FAQTitle}
      />
      <Form title={formTitle} />
      <CTA />
    </>
  );
};
