import "@mantine/core/styles.css";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Siscon Contabilidade",
  description: "Contabilidade para impulssionar o seu negócio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
