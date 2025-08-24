"use client";

import { Box, Burger, Collapse, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useState } from "react";
import classes from "./navbar.module.css";

const links = [
  { link: "/home", label: "Home" },
  { link: "/services", label: "Serviços" },
  { link: "/aboutUs", label: "Sobre nós" },
  { link: "/testimonials", label: "Depoimentos" },
  { link: "/faq", label: "Perguntas frequentes" },
];

  // TODO: Nav mobile não deve empurrar o conteúdo da página, e sim sobrepor.

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image
          src="/images/siscon-horizontal-branco.svg"
          alt="Logo Siscon Contabilidade"
          className={classes.logo}
          width={200}
          height={40}
          priority
        />

        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" color="white"/>
      </Container>

      <Collapse in={opened}>
        <Container size="md">
          <Box className={classes.mobileLinks}>{items}</Box>
        </Container>
      </Collapse>
    </header>
  );
}
