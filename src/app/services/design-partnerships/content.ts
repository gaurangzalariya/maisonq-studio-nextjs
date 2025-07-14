import { ServicePageContent } from '../types';

export const content: ServicePageContent = {
  hero: {
    heading: "Design Partnerships, Not Just Projects",
    subtext: "From strategy to screens, we co-create digital experiences with your team-built in Figma, tuned for growth, and ready to scale.",
    ctaLabel: "Let's Design Together",
  },
  services: {
    title: "Our Design Expertise Includes:",
    intro: "More than a one-time service, our design offering is collaborative. Starting in Figma, we work hand-in-hand with your team to shape digital products that align with your goals and visual identity.",
    subIntro: "From design systems to UI/UX, our focus is on harmony-balancing form and function, style and strategy. We stay with you from concept to final build and beyond, offering ongoing design and dev support as your brand evolves.",
    list: [
      { label: "Collaborative design workflow in Figma", iconName: "PencilLine" },
      { label: "Design systems and scalable UI kits", iconName: "Layers" },
      { label: "Responsive UI/UX for websites and products", iconName: "LayoutDashboard" },
      { label: "Brand alignment and digital style guides", iconName: "Ruler" },
      { label: "Design-to-dev handoff & implementation support", iconName: "Code2" },
      { label: "Ongoing iteration & feedback loops", iconName: "Infinity" },
      { label: "Embedded collaboration with internal teams", iconName: "Users" },
    ],
  },
  faqs: [
    {
      question: "How do you collaborate with internal design or product teams?",
      answer: "We plug in where you need us-whether that's co-creating in Figma, leading UI/UX, or supporting your existing design system. Our team adapts to your workflow, not the other way around.",
    },
    {
      question: "Do you only design, or can you help build too?",
      answer: "Both. We're a hybrid design-dev studio. We often handle full-stack implementation of what we design-or work directly with your in-house developers to support handoff and QA.",
    },
    {
      question: "Can you create a design system for our brand?",
      answer: "Yes. We specialize in scalable UI kits, token-based systems, and Figma libraries that grow with your product and team. Whether you're starting from scratch or refining an existing setup, we've got you.",
    },
    {
      question: "Do you offer one-off design work or long-term partnerships?",
      answer: "We prefer partnerships. While we do short-term projects when needed, most of our clients work with us long-term so we can evolve the design together as your business scales.",
    },
    {
      question: "How do you ensure designs are dev-ready?",
      answer: "We keep handoff in mind from day one-clean layers, clear naming, design tokens, and real components in Figma. If we're also developing, this ensures a seamless design-to-code transition.",
    },
    {
      question: "Do you follow accessibility and usability best practices?",
      answer: "Absolutely. We design with WCAG compliance in mind and ensure interfaces are intuitive, inclusive, and conversion-friendly.",
    },
    {
      question: "What tools do you use for design collaboration?",
      answer: "Figma is our primary design environment. For feedback and async collaboration, we also use tools like Notion, Loom, and Slack depending on the client's stack.",
    },
    {
      question: "Can we start with a small engagement before going long-term?",
      answer: "Yes, many of our partnerships begin with a short project or sprint. Once we've built rapport and results, we often move into ongoing retainers or blocks of design/dev support.",
    },
  ],
}; 