export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  faqData: FAQItem[];
  badge: string;
  title: string;
  subtitle: string;
}
