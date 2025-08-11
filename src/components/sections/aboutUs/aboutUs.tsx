"use client";

import { Box, Button, Container, Flex, Stack, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  { name: "NAC", src: "/images/logoClientes/nac.png" },
  { name: "Águia", src: "/images/logoClientes/aguia.png" },
  { name: "Rolldor", src: "/images/logoClientes/rolldoor.png" },
  { name: "Incoparts", src: "/images/logoClientes/incoparts.png" },
  { name: "Park Grill", src: "/images/logoClientes/parkGrill.png" },
  { name: "QLB", src: "/images/logoClientes/qlb.png" },
  { name: "Lojas Alvorada", src: "/images/logoClientes/lojasAlvorada.png" },
  { name: "Akon", src: "/images/logoClientes/akon.png" },
];

const CtaButton = (props: any) => (
  <Button
    bg="#83EDA3"
    c="#021630"
    size="lg"
    radius="md"
    fz={{ base: 14, md: 16 }}
    fw={700}
    {...props}
  />
);

export default function AboutUs() {
  const [isLogosVisible, setIsLogosVisible] = useState(false);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLogosVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = logosRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      <Box bg="#021630">
        <Box bg="#0161DF" py={{ base: "xl", md: "80px" }}>
          <Container size="xl">
            <Flex
              direction={{ base: "column-reverse", md: "row" }}
              gap={{ base: "xl", md: "60px" }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Box flex={{ base: "none", md: "1" }}>
                <Box
                  bg="white"
                  p={{ base: "xl", md: "40px" }}
                  style={{ borderRadius: "16px" }}
                >
                  <Title
                    order={2}
                    c="#0161DF"
                    fz={{ base: 28, md: 36 }}
                    fw={700}
                    mb="lg"
                    lh={1.2}
                    ta="center"
                  >
                    Mais do que números, contamos histórias.
                  </Title>
                  <Stack gap="md">
                    <Text c="#333" fz={{ base: 14, md: 16 }} lh={1.6}>
                      Fundado em 1990, o Siscon Contabilidade é sinônimo de tradição e modernidade
                      oferecendo o melhor atendimento contábil às empresas de todo o Brasil.
                    </Text>
                    <Text c="#333" fz={{ base: 14, md: 16 }} lh={1.6}>
                      Com sede própria em Maringá-PR, hoje contamos com{" "}
                      <Text component="span" fw={700}>
                        mais de 30 colaboradores
                      </Text>{" "}
                      altamente qualificados e em constante atualização, trabalhando todos os dias
                      para facilitar a sua rotina empresarial.
                    </Text>
                    <Text c="#333" fz={{ base: 14, md: 16 }} lh={1.6}>
                      <Text component="span" fw={700}>
                        Milhares de empresas já passaram por aqui, algumas estão conosco desde nossa
                        fundação
                      </Text>{" "}
                      e, com muito orgulho, contribuímos para o crescimento de cada uma delas.
                    </Text>
                    <Text c="#333" fz={{ base: 14, md: 16 }} lh={1.6}>
                      <Text component="span" fw={700}>
                        Nossa missão é facilitar a gestão empresarial, criando uma relação de
                        confiança com quem sabe o que é empreender no Brasil.
                      </Text>
                    </Text>
                    <CtaButton>Conheça nossos serviços</CtaButton>
                  </Stack>
                </Box>
              </Box>
              <Box w={{ base: "100%", md: "30%" }} ta="center">
                <Stack gap="lg" align="center">
                  <Box
                    w={{ base: 200, md: 250 }}
                    h={{ base: 200, md: 250 }}
                    style={{ borderRadius: "50%", overflow: "hidden" }}
                  >
                    <Image
                      src="/images/claudemir.png"
                      alt="Claudemir Matiusso"
                      width={250}
                      height={250}
                      quality={75}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <Title order={3} c="white" fz={{ base: 24, md: 28 }} fw={700} mb="xs">
                    Claudemir Matiusso
                  </Title>
                  <Text c="white" fz={{ base: 14, md: 16 }} lh={1.6} ta="center" maw={280}>
                    CEO, empresário e contador. Foi conselheiro do Conselho Regional de
                    Contabilidade (CRC-PR) por 8 anos e atuou como Vice-Presidente da Câmera de
                    Registro (CRC-PR) por 4 anos.
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box ref={logosRef} pt={{ base: "xl", md: "80px" }} pb={{ base: "xl", md: "120px" }}>
          <Container size="xl" px={{ base: 0, sm: "md" }}>
            <Box
              p={{ md: "40px" }}
              bg={{ md: "white" }}
              radius={{ md: "lg" }}
              shadow={{ md: "sm" }}
            >
              <Title
                order={3}
                c={{ base: "#0161DF", md: "#021630" }}
                fz={{ base: 22, md: 28 }}
                fw={700}
                ta="center"
                mb="xl"
              >
                Empresas que confiam na gente:
              </Title>

              <Box style={{ overflow: "hidden" }}>
                <Flex
                  hiddenFrom="md"
                  gap="40px"
                  align="center"
                  wrap="nowrap"
                  style={{
                    animation: isLogosVisible ? "scroll 30s linear infinite" : "none",
                  }}
                >
                  {[...logos, ...logos].map((logo, index) => (
                    <Box key={`${logo.name}-${index}`} w={120} h={80} style={{ flexShrink: 0 }}>
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={120}
                        height={80}
                        quality={75}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </Box>
                  ))}
                </Flex>

                <Flex visibleFrom="md" justify="center" align="center" gap={40} wrap="wrap">
                  {logos.map((logo) => (
                    <Box key={logo.name} w={130} h={80}>
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={130}
                        height={80}
                        quality={75}
                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}