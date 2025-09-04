"use client";
import { useEffect } from "react";
import { useActiveSection } from "./ActiveSectionContext";
import { SectionId } from "@/config/sections";

type Props = {
  sectionIds: SectionId[];
};

export const SectionObserver = ({ sectionIds }: Props) => {
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-56px 0px -50% 0px", threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, setActiveSection]);

  return null;
};
