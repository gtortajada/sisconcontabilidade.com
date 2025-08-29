"use client";

import {
  Anchor,
  Box,
  Burger,
  Collapse,
  Container,
  Group,
  rem,
  MantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";

const links = [
  { link: "#home", label: "Home" },
  { link: "#services", label: "Serviços" },
  { link: "#aboutUs", label: "Sobre nós" },
  { link: "#testimonials", label: "Depoimentos" },
  { link: "#faq", label: "Perguntas frequentes" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const headerStyles = {
    backgroundColor: "#0161DF",
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };

  const innerStyles = {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const linkStyles = (theme: MantineTheme, isActive: boolean) => ({
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    transition: "background-color 150ms ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
    ...(isActive && {
      fontWeight: 700,
    }),
  });

  const collapseContainerStyles = {
    position: "absolute" as const,
    top: rem(56),
    left: 0,
    right: 0,
    backgroundColor: "#0161DF",
    borderTop: `${rem(1)} solid rgba(255, 255, 255, 0.2)`,
  };

  const items = links.map((link) => {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (link.link.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(link.link);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
      setActive(link.link);
      close();
    };

    return (
      <Anchor
        key={link.label}
        href={link.link}
        style={(theme) => linkStyles(theme, active === link.link)}
        onClick={handleLinkClick}
      >
        {link.label}
      </Anchor>
    );
  });

  return (
    <header style={headerStyles}>
      <Container size="md" style={innerStyles}>
        <Image
          src="/images/siscon-horizontal-branco.svg"
          alt="Logo Siscon Contabilidade"
          width={150}
          height={40}
          priority
        />
        <Group gap={5} visibleFrom="sm">
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          color="white"
        />
      </Container>
      <Collapse in={opened}>
        <Box style={collapseContainerStyles}>
          <Container size="md" py="sm">
            {items}
          </Container>
        </Box>
      </Collapse>
    </header>
  );
}