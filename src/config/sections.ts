export const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Serviços" },
  { id: "aboutUs", label: "Sobre nós" },
  { id: "testimonials", label: "Depoimentos" },
  { id: "faq", label: "Perguntas frequentes" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

export const scrollToSection = (sectionId: SectionId) => {
  const sectionSelector = "#" + sectionId;
  const targetElement = document.querySelector(sectionSelector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", sectionSelector);
  }
};
