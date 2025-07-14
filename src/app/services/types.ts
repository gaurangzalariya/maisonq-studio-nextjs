export type Service = {
  label: string;
  iconName: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type ServicePageContent = {
  hero: {
    heading: string;
    subtext: string;
    ctaLabel: string;
  };
  services: {
    title: string;
    intro: string;
    subIntro: string;
    list: Service[];
  };
  faqs: FAQ[];
}; 