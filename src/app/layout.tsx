import "@mantine/core/styles.css";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { theme } from "@/theme";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import { ActiveSectionProvider } from "@/components/ActiveSectionContext";
import { SectionObserver } from "@/components/SectionObserver";
import { sections } from "@/config/sections";

export const metadata = {
  title: "Siscon Contabilidade",
  description: "Contabilidade para impulsionar o seu negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-mantine-color-scheme="light">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <ActiveSectionProvider>
            <Navbar />
            <SectionObserver sectionIds={sections.map((s) => s.id)} />
            {children}
            <Footer />
          </ActiveSectionProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
