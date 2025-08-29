"use client";

import {
  ActionIcon,
  Anchor,
  AspectRatio,
  Box,
  Center,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandInstagram, IconPhone } from "@tabler/icons-react";
import Image from "next/image";

export function Footer() {
  const colors = {
    titles: "#83EDA3",
    footerBg: "#021630",
    copyrightBg: "#005bb5",
    text: "#FFFFFF",
    links: "#FFFFFF",
    divider: "#005bb5",
  };

  const links = [
    { link: "#home", label: "Home" },
    { link: "#services", label: "Serviços" },
    { link: "#aboutUs", label: "Sobre nós" },
    { link: "#testimonials", label: "Depoimentos" },
    { link: "#faq", label: "Perguntas frequentes" },
  ];

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (link.startsWith("#")) {
      event.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const siteMapItems = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      c={colors.links}
      onClick={(event) => handleLinkClick(event, link.link)}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <Box component="footer" bg={colors.footerBg} c={colors.text}>
      <Container size="sm" py="xs">
        <Group
          justify="center"
          align="center"
          gap="xs"
          
          style={(theme) => ({
            [`@media (max-width: ${theme.breakpoints.md})`]: {
              flexDirection: "column",
              gap: theme.spacing.xl,
            },
          })}
        >
          <Box
            w={{ base: "70%", md: 300 }}
            h={60}
            style={{ position: "relative" }}
          >
            <Image
              src="/images/siscon-horizontal-branco.svg"
              alt="Logo Siscon Contabilidade"
              fill
              priority
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              sizes="70vw"
            />
          </Box>
          <Stack
            align="center"
            gap="xs"
            style={(theme) => ({
              textAlign: "center",
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                alignItems: "flex-end",
                textAlign: "left",
              },
            })}
          >
            <Box w={{ base: "70%", md: 400 }}>
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://maps.google.com/maps?q=Avenida%20Dr.%20Alexandre%20Rasgulaeff%2C%20752%2C%20Jardim%20Alvorada%2C%20Maring%C3%A1&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                  style={{ border: 0 }}
                  title="Localização da Siscon Contabilidade no Google Maps"
                />
              </AspectRatio>
            </Box>
            <Text ta="center" fz="sm">
              Avenida Dr. Alexandre Rasgulaeff, 752. Jardim Alvorada, Maringá.
            </Text>
          </Stack>
        </Group>

        <Center>
          <Divider
            my="xs"
            color={colors.divider}
            w={{ base: "80%", md: "100%" }}
          />
        </Center>

        <SimpleGrid
          cols={{ base: 1, md: 3 }}
          spacing={{ base: "xl", md: "lg" }}
          verticalSpacing="xs"
        >
          <Stack
            gap={1}
            align="center"
            style={(theme) => ({
              textAlign: "center",
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                alignItems: "flex-start",
                justifyContent: "center",
                height: "100%",
                textAlign: "left",
              },
            })}
          >
            <Title order={4} c={colors.titles}>
              Fale Conosco:
            </Title>
            <Group gap={1}>
              <ActionIcon variant="transparent" c={colors.links}>
                <IconPhone size={20} />
              </ActionIcon>
              <Anchor href="tel:+554430266080" c={colors.links}>
                (44) 3026-6080
              </Anchor>
            </Group>
            <Group gap={1}>
              <ActionIcon variant="transparent" c={colors.links}>
                <IconBrandInstagram size={20} />
              </ActionIcon>
              <Anchor
                href="https://www.instagram.com/siscon_contabilidade/"
                target="_blank"
                rel="noopener noreferrer"
                c={colors.links}
              >
                @siscon_contabilidade
              </Anchor>
            </Group>
          </Stack>

          <Divider color={colors.divider} hiddenFrom="md" w="60%" mx="auto" />

          <Stack
            gap={1}
            align="center"
            style={(theme) => ({
              textAlign: "center",
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                justifyContent: "center",
                height: "100%",
              },
            })}
          >
            <Title order={4} c={colors.titles}>
              Horário de funcionamento:
            </Title>
            <Text>Segunda à sexta-feira</Text>
            <Text>8h às 11h30 e 13h às 18h</Text>
          </Stack>

          <Divider color={colors.divider} hiddenFrom="md" w="40%" mx="auto" />

          <Stack
            gap={1}
            align="center"
            style={(theme) => ({
              textAlign: "center",
              [`@media (min-width: ${theme.breakpoints.md})`]: {
                alignItems: "flex-start",
                textAlign: "left",
              },
            })}
          >
            {siteMapItems}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box bg={colors.copyrightBg} c={colors.text} py="sm">
        <Container size="lg">
          <Stack align="center" gap={5}>
            <Text size="sm" ta="center">
              Copyrights © 2025. Todos os direitos reservados Siscon
              Contabilidade
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
