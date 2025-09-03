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
import { CSSProperties, useState } from "react";

const links = [
  { target: "#home", label: "Home" },
  { target: "#services", label: "Serviços" },
  { target: "#aboutUs", label: "Sobre nós" },
  { target: "#testimonials", label: "Depoimentos" },
  { target: "#faq", label: "Perguntas frequentes" },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].target);

  const headerStyles: CSSProperties = {
    backgroundColor: "#0161DF",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  };

  const innerStyles: CSSProperties = {
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

  const collapseContainerStyles: CSSProperties = {
    position: "absolute",
    top: rem(56),
    left: 0,
    right: 0,
    backgroundColor: "#0161DF",
    borderTop: `${rem(1)} solid rgba(255, 255, 255, 0.2)`,
  };

  const items = links.map((link) => {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (link.target.startsWith("#")) {
        event.preventDefault();
        const targetElement = document.querySelector(link.target);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
      setActive(link.target);
      close();
    };

    return (
      <Anchor
        key={link.label}
        href={link.target}
        style={(theme) => linkStyles(theme, active === link.target)}
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