"use client";

import { CtaButton } from "@/components/ctaButton";
import { Box, Container, Flex, Stack, Text, Title, rem } from "@mantine/core";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const clientLogos = [
  { name: "NAC", src: "/images/logoClientes/nac.png" },
  { name: "Águia", src: "/images/logoClientes/aguia.png" },
  { name: "Rolldor", src: "/images/logoClientes/rolldoor.png" },
  { name: "Incoparts", src: "/images/logoClientes/incoparts.png" },
  { name: "Park Grill", src: "/images/logoClientes/parkGrill.png" },
  { name: "QLB", src: "/images/logoClientes/qlb.png" },
  { name: "Lojas Alvorada", src: "/images/logoClientes/lojasAlvorada.png" },
  { name: "Akon", src: "/images/logoClientes/akon.png" },
];

const aboutUsContent = {
  claudemirProfile: {
    name: "Claudemir Matiusso",
    bio: "CEO da Siscon, empresário e contador. Foi conselheiro do Conselho Regional de Contabilidade (CRC-PR) por 8 anos e atuou como Vice-Presidente da Câmara de Registro (CRC-PR) por 4 anos.",
  },
  sisconHistoryCard: {
    title: "Mais do que números, contamos histórias.",
    highlights: [
      <Text key="p1" c="#333" fz={rem(14)} lh={1.6}>
        {" "}
        Fundado em 1990, o Siscon Contabilidade é sinônimo de tradição e
        modernidade oferecendo o melhor atendimento contábil às empresas de todo
        o Brasil.
      </Text>,
      <Text key="p2" c="#333" fz={rem(14)} lh={1.6}>
        Com sede própria em Maringá-PR, hoje contamos com{" "}
        <Text component="span" fw={700}>
          mais de 30 colaboradores
        </Text>{" "}
        altamente qualificados e em constante atualização, trabalhando todos os
        dias para facilitar a sua rotina empresarial.
      </Text>,
      <Text key="p3" c="#333" fz={rem(14)} lh={1.6}>
        <Text component="span" fw={700}>
          Milhares de empresas já passaram por aqui, algumas estão conosco desde
          nossa fundação
        </Text>{" "}
        e, com muito orgulho, contribuímos para o crescimento de cada uma delas.
      </Text>,
      <Text key="p4" c="#333" fz={rem(14)} lh={1.6} fw={700}>
        Nossa missão é facilitar a gestão empresarial, criando uma relação de
        confiança com quem sabe o que é empreender no Brasil.
      </Text>,
    ],
    ctaBtn: "Tire suas dúvidas pelo WhatsApp",
  },
};

export default function AboutUs() {
  return (
    <>
      <Box component="section" id="aboutUs">
        <Box visibleFrom="md" id="mainContentDesktop">
          <Box bg="#F2FEFF" pb={rem(120)}>
            <Box
              style={{
                backgroundImage: `url('/images/bgAboutUs.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                position: "relative",
              }}
              pb={rem(180)}
            >
              <Box
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(2, 22, 48, 0.3)",
                  zIndex: 1,
                }}
              />
              <Box style={{ position: "relative", zIndex: 2 }}>
                <Box pt={rem(80)}>
                  <Container size="xl">
                    <Flex direction="row" gap={rem(60)} align="flex-start">
                      <Box flex="1">
                        <Box
                          bg="white"
                          p={rem(40)}
                          style={{
                            borderRadius: rem(16),
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                          }}
                        >
                          <Title
                            order={2}
                            c="#0161DF"
                            fz={rem(36)}
                            fw={700}
                            mb="lg"
                            lh={1.2}
                          >
                            {aboutUsContent.sisconHistoryCard.title}
                          </Title>
                          <Stack gap="md" ta={{ base: "center", md: "left" }}>
                            {aboutUsContent.sisconHistoryCard.highlights.map(
                              (highlight, index) => (
                                <React.Fragment key={index}>
                                  {highlight}
                                </React.Fragment>
                              )
                            )}
                            <CtaButton>
                              {aboutUsContent.sisconHistoryCard.ctaBtn}
                            </CtaButton>
                          </Stack>
                        </Box>
                      </Box>
                      <Box w="30%" ta="center" pt="xl">
                        <Stack gap="lg" align="center">
                          <Box
                            w={rem(250)}
                            h={rem(315)}
                            style={{
                              borderRadius: rem(16),
                              overflow: "hidden",
                            }}
                          >
                            <Image
                              src="/images/claudemir.png"
                              alt="Foto de perfil: Claudemir Matiusso"
                              width={541}
                              height={681}
                              quality={75}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center",
                              }}
                            />
                          </Box>
                          <Title
                            order={3}
                            c="white"
                            fz={rem(28)}
                            fw={700}
                            mb="xs"
                          >
                            {aboutUsContent.claudemirProfile.name}
                          </Title>
                          <Text
                            c="white"
                            fz={rem(16)}
                            lh={1.6}
                            ta="center"
                            maw={rem(320)}
                          >
                            {aboutUsContent.claudemirProfile.bio}
                          </Text>
                        </Stack>
                      </Box>
                    </Flex>
                  </Container>
                </Box>
              </Box>
            </Box>

            <Box mt={rem(-100)} style={{ position: "relative", zIndex: 3 }}>
              <Container size="xl">
                <Box
                  bg="white"
                  p={rem(40)}
                  style={{
                    borderRadius: rem(16),
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <Title
                    order={3}
                    c="#0161DF"
                    fz={rem(28)}
                    fw={700}
                    ta="center"
                    mb="xl"
                  >
                    Empresas que confiam na Siscon:
                  </Title>
                  <Flex
                    justify="space-between"
                    align="center"
                    wrap="nowrap"
                    gap={rem(20)}
                  >
                    {clientLogos.map((logo) => (
                      <Box key={logo.name} w={rem(110)} h={rem(70)}>
                        <Image
                          src={logo.src}
                          alt={logo.name}
                          width={110}
                          height={70}
                          quality={75}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    ))}
                  </Flex>
                </Box>
              </Container>
            </Box>
          </Box>
        </Box>

        <Box hiddenFrom="md" id="mainContentMobilePlusInfiniteScrollBanner">
          <Box
            id="parallaxContainer"
            style={{
              backgroundImage: `url('/images/bgAboutUs.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              position: "relative",
            }}
          >
            <Box
              id="parallaxOverlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(2, 22, 48, 0.3)",
                zIndex: 1,
              }}
            />

            <Box id="paralaxContent" style={{ position: "relative", zIndex: 2 }}>
              <Box py="xl">
                <Container size="xl">
                  <Flex direction="column-reverse" gap="xl" align="center">
                    <Box flex={{ base: "none", md: "1" }}>
                      <Box
                        id="aboutUsContent"
                        mx="xs"
                        bg="white"
                        p="xs"
                        ta="center"
                        style={{
                          borderRadius: rem(3),
                          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                        }}
                      >
                        <Title
                          order={2}
                          c="#0161DF"
                          fz={rem(28)}
                          fw={700}
                          mb="lg"
                          lh={1.2}
                        >
                          {aboutUsContent.sisconHistoryCard.title}
                        </Title>
                        <Stack gap="md">
                          {aboutUsContent.sisconHistoryCard.highlights.map(
                            (highlight, index) => (
                              <React.Fragment key={index}>
                                {highlight}
                              </React.Fragment>
                            )
                          )}
                          <CtaButton>
                            {aboutUsContent.sisconHistoryCard.ctaBtn}
                          </CtaButton>
                        </Stack>
                      </Box>
                    </Box>
                    <Box w="100%" ta="center" pt="xl">
                      <Stack gap="lg" align="center">
                        <Box
                          w={rem(200)}
                          h={rem(200)}
                          style={{ borderRadius: "50%", overflow: "hidden" }}
                        >
                          <Image
                            src="/images/claudemir.png"
                            alt="Foto de perfil: Claudemir Matiusso"
                            width={541}
                            height={681}
                            quality={75}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              objectPosition: "center 20%",
                            }}
                          />
                        </Box>
                        <Title
                          order={3}
                          c="white"
                          fz={rem(24)}
                          fw={700}
                          mb="xs"
                        >
                          {aboutUsContent.claudemirProfile.name}
                        </Title>
                        <Text
                          c="white"
                          fz={rem(14)}
                          lh={1.6}
                          ta="center"
                          maw={rem(320)}
                        >
                          {aboutUsContent.claudemirProfile.bio}
                        </Text>
                      </Stack>
                    </Box>
                  </Flex>
                </Container>
              </Box>
            </Box>
          </Box>

          <Box
            id="clientLogosInfiniteScroll"
            bg="#ffffffff"
            py="md"
            style={{
              position: "relative",
              boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.55)",
            }}
          >
            <Container fluid px={0}>
              <Title
                order={3}
                c="#0161DF"
                fz={rem(22)}
                fw={700}
                ta="center"
                mb="xl"
              >
                Empresas que confiam na Siscon:
              </Title>
              <Box py="xs">
                <Marquee speed={40}>
                  {clientLogos.map((logo, index) => (
                    <Image
                      key={index}
                      src={logo.src}
                      alt={`Logo da empresa parceira ${index + 1}`}
                      height={80}
                      width={110}
                      style={{ objectFit: "contain", margin: "0 1.5rem" }}
                    />
                  ))}
                </Marquee>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}
