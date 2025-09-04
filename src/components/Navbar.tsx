"use client";

import { scrollToSection, sections } from "@/config/sections";
import {
  Anchor,
  Box,
  Burger,
  Collapse,
  Container,
  Group,
  MantineTheme,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { CSSProperties } from "react";
import { useActiveSection } from "./ActiveSectionContext";

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { activeSection } = useActiveSection();

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

  const navbarLinks = sections.map((section) => {
    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event?.preventDefault();
      scrollToSection(section.id);
      close();
    };

    return (
      <Anchor
        key={section.label}
        href={"#" + section.id}
        style={(theme) => linkStyles(theme, activeSection === section.id)}
        onClick={handleLinkClick}
      >
        {section.label}
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
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        />
        <Group gap={5} visibleFrom="sm">
          {navbarLinks}
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
            {navbarLinks}
          </Container>
        </Box>
      </Collapse>
    </header>
  );
}
