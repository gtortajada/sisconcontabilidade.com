// src/components/Footer/Footer.tsx
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
  };

  return (
    <Box component="footer" bg={colors.footerBg} c={colors.text}>
      <Container size="lg" py="xl">
        <AspectRatio
          ratio={540 / 116}
          maw={480}
          mx="auto"
          style={{ position: "relative" }}
        >
          <Image
            src="images/siscon-horizontal-branco.svg"
            alt="Logo Siscon Contabilidade"
            fill
          />
          <div></div>
        </AspectRatio>

        <Center mt="xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64440159.17531167!2d-99.76709813773608!3d-9.671198649557327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd12339842d99%3A0x642cdeb72591c526!2sSiscon%20Contabilidade%20e%20Assessoria!5e0!3m2!1sen!2sbr!4v1754339368176!5m2!1sen!2sbr"
            loading="lazy"
            height={250}
          ></iframe>
          {/* //TODO: Ajustar aspect ratio. */}
        </Center>
        <Center mt="md" ta="center">
          <Text>
            Avenida Dr. Alexandre Rasgulaeff, 752. Jardim Alvorada, Maringá.
          </Text>
        </Center>

        {/* --- Layout para Desktop --- */}
        <Center visibleFrom="sm">
          <Divider my="xl" color="#ecececff" />
          <SimpleGrid cols={3} spacing="lg">
            <Stack>
              <Title order={4} c={colors.titles}>
                Fale Conosco:
              </Title>
              <Group gap="xs">
                {/* PLACEHOLDER: Substitua pelo seu ícone se necessário */}
                <ActionIcon variant="transparent" c={colors.links}>
                  <IconPhone size={18} />
                </ActionIcon>
                <Anchor
                  href="tel:+554430266080"
                  c={colors.links}
                  style={{ textDecoration: "none" }}
                >
                  (44) 3026-6080
                </Anchor>
              </Group>
              <Group gap="xs">
                {/* PLACEHOLDER: Substitua pelo seu ícone se necessário */}
                <ActionIcon variant="transparent" c={colors.links}>
                  <IconBrandInstagram size={18} />
                </ActionIcon>
                <Anchor
                  href="#"
                  c={colors.links}
                  style={{ textDecoration: "none" }}
                >
                  @siscon_contabilidade
                </Anchor>
              </Group>
            </Stack>

            <Stack>
              <Title order={4} c={colors.titles}>
                Horário de funcionamento:
              </Title>
              <Text>Segunda à sexta-feira</Text>
              <Text>8h às 11h30 e 13h às 18h</Text>
            </Stack>

            <Stack gap="xs">
              <Anchor href="#" c={colors.links}>
                Home{" "}
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Serviços{" "}
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Sobre nós{" "}
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Nossos Clientes{" "}
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Dúvidas Frequentes
              </Anchor>
            </Stack>
          </SimpleGrid>
        </Center>

        {/* --- Layout para Mobile --- */}
        <Center hiddenFrom="sm">
          <Stack align="center" gap="lg" my="xl">
            <Divider w="80%" color="#1f3a5d" />
            <Stack align="center" gap={0}>
              <Title order={4} c={colors.titles}>
                Horário de atendimento:
              </Title>
              <Text>Segunda à sexta-feira</Text>
              <Text>8h às 11h30 e 13h às 18h</Text>
            </Stack>

            <Divider w="60%" color="#1f3a5d" />
            <Stack align="center" gap="sm">
              <Title order={4} c={colors.titles}>
                Fale Conosco:
              </Title>
              <Group gap="xs">
                {/* PLACEHOLDER: Substitua pelo seu ícone se necessário */}
                <ActionIcon variant="transparent" c={colors.links}>
                  <IconPhone size={16} />
                </ActionIcon>
                <Anchor
                  href="tel:+554430266080"
                  c={colors.links}
                  style={{ textDecoration: "none" }}
                >
                  (44) 3026-6080
                </Anchor>
              </Group>
              <Group gap="xs">
                {/* PLACEHOLDER: Substitua pelo seu ícone se necessário */}
                <ActionIcon variant="transparent" c={colors.links}>
                  <IconBrandInstagram size={16} />
                </ActionIcon>
                <Anchor
                  href="#"
                  c={colors.links}
                  style={{ textDecoration: "none" }}
                >
                  @siscon_contabilidade
                </Anchor>
              </Group>
            </Stack>

            <Divider w="40%" color="#1f3a5d" />
            <Stack align="center" gap="sm">
              <Anchor href="#" c={colors.links}>
                Home
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Serviços
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Sobre nós
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Nossos Clientes
              </Anchor>
              <Anchor href="#" c={colors.links}>
                Dúvidas Frequentes
              </Anchor>
            </Stack>
          </Stack>
        </Center>
      </Container>

      <Box bg={colors.copyrightBg} c={colors.text} py="md">
        <Container size="lg">
          <Stack align="center" gap={5}>
            <Text size="sm" ta="center">
              Copyrights © 2025. Todos os direitos reservados Siscon
              Contabilidade
            </Text>
            <Text size="xs" ta="center">
              Desenvolvido por Tortajado.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
