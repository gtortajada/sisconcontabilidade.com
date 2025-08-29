"use client";

import { CtaButton } from "@/components/ctaButton";
import {
  AspectRatio,
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Text,
  Title
} from "@mantine/core";
import Image from "next/image";

const testimonials = [
  {
    name: "Ana Silva",
    role: "Diretor, Incoparts ",
    quote:
      "Estamos muito felizes com o comprometimento e disponibilidade de toda equipe. Super recomendamos o escritório e os serviços prestados. Parabéns a todos os envolvidos pela qualidade e principalmente pelo atendimento diferenciado!",
  },
  {
    name: "Carlos Oliveira",
    role: "Proprietário, Lojas Alvorada",
    quote:
      "Profissionalismo e excelente atendimento, procurava atendimento na área tributária e o Claudemir mostrou capacitação e experiência, excelente mesmo, Claudemir e a equipe estão de parabéns ",
  },
  {
    name: "Juliana Pereira",
    role: "Gerente, Águia Lubrificantes",
    quote:
      "Excelente escritório, profissionais qualificados, atendimento humanizado e sempre atenciosos. Indico de olho fechado, parabéns à equipe pelo trabalho.",
  },
  {
    name: "Rafael Souza",
    role: "Proprietário, QLB",
    quote:
      "Todos os profissionais são muito atenciosos e rápidos. Empresa séria, transparente e que deixa o cliente totalmente tranquilo com sua contabilidade.",
  },
];

export default function Testimonials() {
  return (
    <Box bg="#F2FEFF" py={{ base: "xl"}} component="section" id="testimonials">
      <Container size="lg">
        <Stack align="center" gap="xl">
          <Title
            order={2}
            c="#0161DF"
            fz={{ base: 32, md: 48 }}
            fw={700}
            ta="center"
          >
            Experiências reais:
          </Title>

          <Grid visibleFrom="md" w="100%" gutter="xl" align="stretch">
            <Grid.Col span={7}>
              <Grid>
                {testimonials.map((testimonial, index) => (
                  <Grid.Col key={index} span={6}>
                    <Stack
                      p="sm"
                      h="100%"
                      style={{
                        border: "4px solid #228BE6",
                        borderRadius: "8px",
                      }}
                      align="center"
                      ta="center"
                      gap="md"
                    >
                      <Box w={40} h={1} style={{ alignSelf: "flex-start" }}>
                        <Image
                          src="/images/11-icon-aspas.svg"
                          alt="Ícone de aspas"
                          width={40}
                          height={28}
                        />
                      </Box>
                      <Stack gap="xs" align="center">
                        <Text c="#021630" fz="md" fw={700}>
                          {testimonial.name}
                        </Text>
                        <Text c="#021630" fz="sm" fw={500}>
                          {testimonial.role}
                        </Text>
                      </Stack>
                      <Text c="#021630" fz="sm" fw={400}>
                        {testimonial.quote}
                      </Text>
                    </Stack>
                  </Grid.Col>
                ))}
              </Grid>
            </Grid.Col>
            <Grid.Col span={5}>
              <AspectRatio
                ratio={320 / 568}
                w={320}
                mx="auto"
                style={{ borderRadius: "8px" }}
              >
                <video
                  poster="/images/video-poster.jpg"
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source
                    src="/videos/videoExperienciasReais.MOV"
                    type="video/mp4"
                  />
                  Seu navegador não suporta o vídeo.
                </video>
              </AspectRatio>
            </Grid.Col>
          </Grid>

          <Stack hiddenFrom="md" gap="sm" align="center">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Stack key={index} gap="md" align="center" w="100%">
                <Box w={40} h={28}>
                  <Image
                    src="/images/11-icon-aspas.svg"
                    alt="Ícone de aspas"
                    width={40}
                    height={28}
                  />
                </Box>
                <Stack gap={4} ta="center">
                  <Text c="#0161DF" fz="lg" fw={700}>
                    {testimonial.name}
                  </Text>
                  <Text c="#021630" fz="sm" fw={600}>
                    {testimonial.role}
                  </Text>
                </Stack>
                <Text c="#021630" fz="sm" fw={400} ta="center" px="sm" maw={{base: '100%', sm: '60%'}}>
                  {testimonial.quote}
                </Text>
                {index < testimonials.slice(0, 4).length - 1 && (
                  <Divider color="#0161DF" w="50%" />
                )}
              </Stack>
            ))}
            <AspectRatio
              ratio={9 / 16}
              w="100%"
              maw={320}
              style={{ borderRadius: "8px" }}
              mt={"md"}
            >
              <video
                poster="/images/video-poster.jpg"
                preload="metadata"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              >
                <source
                  src="/videos/videoExperienciasReais.MOV"
                  type="video/mp4"
                />
                Seu navegador não suporta o vídeo.
              </video>
            </AspectRatio>
          </Stack>

          <CtaButton>Fale com nossos especialistas agora</CtaButton>
        </Stack>
      </Container>
    </Box>
  );
}
