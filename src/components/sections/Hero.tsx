"use client";

import { CtaButton } from "@/components/CtaButton";
import { Section } from "@/components/Section";
import {
  Box,
  Card,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    icon: "/images/home/segurança.svg",
    title: "Você protegido pelo Seguro de Responsabilidade Civil.",
    description:
      "Todos os clientes contam com a cobertura de responsabilidade civil. Se houver imprevistos fiscais e/ou contáveis, o seguro cobre todos os custos. — você não paga nada.",
  },
  {
    id: 2,
    icon: "/images/home/segmento.svg",
    title: "Atendimento para Todos os Seguimentos.",
    description:
      "Estamos preparados para atender empresas de todos os portes e setores, com soluções sob medida para as particularidades do seu negócio.",
  },
  {
    id: 3,
    icon: "/images/home/brasil.svg",
    title: "Clientes por Todo o Território Nacional.",
    description:
      "Atendemos empresas de todo o Brasil, de forma 100% remota com a mesma agilidade e qualidade do atendimento presencial.",
  },
];

export default function Hero() {
  return (
    <Section id="home">
      <Box
        style={(theme) => ({
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          backgroundImage:
            "linear-gradient(rgba(2, 22, 48, 0.45), rgba(2, 22, 48, 0.45)), url(/images/home/bg-header.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center 100%",

          [`@media (minWidth: ${theme.breakpoints.md})`]: {
            backgroundPosition: "center bottom",
          },
        })}
        mih={{ base: "100vh", md: "768px" }}
        mah={{ base: "auto", md: "1000px" }}
        pb={{ base: 0, md: rem(150) }}
      >
        <Stack align="center" style={{ zIndex: 1 }} p="sm" gap="xs">
          <Title
            order={1}
            px={{ base: "xl", sm: "0" }}
            fz={{ base: rem(42), sm: rem(56) }}
            fw={700}
            lts={-1}
            lh={1}
            mb="sm"
            maw={{ base: "100%", sm: "70%" }}
          >
            Há mais de 35 anos facilitando a rotina do empresário brasileiro.
          </Title>
          <Text
            px={{ base: "md", sm: "0" }}
            fz={{ base: rem(24), sm: rem(28) }}
            lh={1.1}
            mb="xl"
            maw={{ base: "80%", sm: "60%" }}
          >
            Mais de 400 empresas confiam no Siscon Contabilidade para crescer
            com segurança, economia e tranquilidade fiscal.
          </Text>
          <CtaButton>Fale com nossos especialistas</CtaButton>
        </Stack>
      </Box>

      <Box
        bg="white"
        py={{ base: rem(32), sm: rem(-80) }}
        px="md"
        mt={{ base: 0, sm: rem(40), md: rem(-150) }}
      >
        <Stack gap="lg" align="center" hiddenFrom="md">
          {cardData.map((card) => (
            <Card
              key={card.id}
              shadow="md"
              radius="md"
              padding="xl"
              withBorder
              style={{
                borderColor: "#0161DF",
                borderWidth: "2px",
                backgroundColor: "white",
                width: "80%",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                gap="sm"
                align="center"
                style={{ textAlign: "center", flex: 1 }}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={48}
                  height={48}
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(33%) sepia(88%) saturate(3578%) hue-rotate(209deg) brightness(99%) contrast(101%)",
                  }}
                />
                <Title order={4} size="h4" fw={600} lh={1.3} c="#0161DF">
                  {card.title}
                </Title>
                <Text size="sm" lh={1.3} c="black" style={{ flex: 1 }}>
                  {card.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </Stack>

        <Container size="md" style={{ padding: 0 }}>
          <SimpleGrid
            cols={{ base: 1, sm: 3 }}
            spacing="6rem"
            verticalSpacing={{ base: "lg", sm: "xl" }}
            visibleFrom="md"
            style={{
              position: "relative",
              zIndex: 2,
            }}
          >
            {cardData.map((card) => (
              <Card
                key={card.id}
                shadow="md"
                radius="md"
                padding="lg"
                withBorder
                style={{
                  borderColor: "#0161DF",
                  borderWidth: "2px",
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack
                  gap="sm"
                  align="center"
                  style={{ textAlign: "center", flex: 1 }}
                >
                  <Image
                    src={card.icon}
                    alt=""
                    width={48}
                    height={48}
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(33%) sepia(88%) saturate(3578%) hue-rotate(209deg) brightness(99%) contrast(101%)",
                    }}
                  />
                  <Title order={4} size="h4" fw={600} lh={1.3} c="#0161DF">
                    {card.title}
                  </Title>
                  <Text
                    size="sm"
                    lh={1.3}
                    c="black"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.description}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    </Section>
  );
}
