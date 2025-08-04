import "@mantine/core/styles.css";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

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
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
