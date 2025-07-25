import "@mantine/core/styles.css";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata = {
  title: "Siscon Contabilidade",
  description: "Contabilidade para impulssionar o seu negócio",
};

const myTheme = createTheme({
  fontFamily: "Aeonik, sans-serif",
  headings: {
    fontFamily: "Aeonik, sans-serif",
    sizes: {
      h1: { fontSize: "3rem", fontWeight: "700" },
      h2: { fontSize: "2.5rem", fontWeight: "300" },
    },
  },
});

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
        <MantineProvider theme={myTheme}>
          <Navbar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
