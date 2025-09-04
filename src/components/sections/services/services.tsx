"use client";

import "@mantine/carousel/styles.css";

import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Container,
  Divider,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import React, { useRef } from "react";

import { CtaButton } from "@/components/ctaButton";

const servicesData = [
  {
    icon: "/images/services/abertura.svg",
    title: "Abertura e fechamento de empresas.",
    description:
      "Oferecemos todo o suporte necessário para você abrir ou encerrar sua empresa com agilidade e sem dor de cabeça.",
  },
  {
    icon: "/images/services/certificate.svg",
    title: "Emissão de certificado digital.",
    description:
      "Economize tempo e assine documentos com segurança. Emitimos o seu certificado digital sem que você precise sair de casa ou do seu escritório.",
  },
  {
    icon: "/images/services/planejamento.svg",
    title: "Planejamento tributário.",
    description:
      "Analisamos detalhadamente o regime tributário ideal para sua empresa, com foco em economia, segurança e crescimento sustentável.",
  },
  {
    icon: "/images/services/regularização.svg",
    title: "Regularização de obras na Receita Federal.",
    description:
      "Realizamos a regularização de obras, utilizando estratégias reconhecidas pela Receita Federal para gerar até 80% de economia no seu orçamento.",
  },
  {
    icon: "/images/services/inventario.svg",
    title: "Assessoria em inventário extrajudicial.",
    description:
      "O cuidado que você precisa para transmitir os bens de uma pessoa falecida aos herdeiros.",
  },
  {
    icon: "/images/services/imposto.svg",
    title: "Imposto de renda para PJ, PF e Rural.",
    description:
      "Preparamos e entregamos sua declaração com precisão, reduzindo riscos de malha fina e otimizando possíveis restituições.",
  },
];

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card
      padding="lg"
      radius="md"
      withBorder={false}
      style={{
        backgroundColor: "white",
        border: "none",
        boxShadow: "none",
        height: "100%",
      }}
    >
      <Group align="flex-start" gap="md" style={{ height: "100%" }}>
        <Divider
          orientation="vertical"
          size="sm"
          style={{
            height: "auto",
            minHeight: "120px",
            alignSelf: "stretch",
            borderColor: "#0161DF",
          }}
        />
        <Stack gap="xs" style={{ flex: 1 }} maw={220}>
          <Box>
            <Image
              src={icon}
              alt={title}
              w={48}
              h={48}
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(27%) sepia(99%) saturate(3383%) hue-rotate(205deg) brightness(95%) contrast(101%)",
              }}
            />
          </Box>
          <Title
            order={3}
            size="h4"
            style={{
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: "8px",
              color: "#0161DF",
            }}
          >
            {title}
          </Title>
          <Text
            size="sm"
            style={{
              lineHeight: 1.5,
              flex: 1,
              color: "black",
            }}
          >
            {description}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};

const ServicesSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));
  return (
    <Box
      component="section"
      id="services"
      pt={{ base: "60px", sm: "60px", md: "60px" }}
      pb={{ base: "60px", sm: "70px", md: "80px" }}
      style={{
        backgroundColor: "white",
      }}
    >
      <Container size="lg">
        <Stack gap="xs" align="center">
          <Title
            order={1}
            size="h1"
            ta="center"
            style={{
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.2,
              color: "#0161DF",
            }}
          >
            A contabilidade feita para você.
          </Title>
          <Text
            size="lg"
            ta="center"
            maw={330}
            style={{
              lineHeight: 1.2,
              color: "black",
            }}
          >
            Cuidamos de toda a rotina contábil, desde guias de impostos até a
            folha de pagamento e pró-labore, garantindo que sua empresa esteja
            sempre em conformidade com o governo.
          </Text>

          {isMobile ? (
            <Box w="100%">
              <Carousel
                withIndicators
                height="auto"
                slideSize="65%"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                styles={{
                  indicator: {
                    width: "8px",
                    height: "8px",
                    border: "4px solid #0161DF",
                    backgroundColor: "#0161DF",
                  },
                  indicators: {
                    gap: "8px",
                    paddingTop: "10px",
                  },
                  control: {
                    display: "none",
                  },
                }}
              >
                {servicesData.map((service, index) => (
                  <Carousel.Slide key={index}>
                    <ServiceCard
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Box>
          ) : (
            <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs" w="90%">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </SimpleGrid>
          )}

          <Box>
            <CtaButton>Quero saber mais</CtaButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ServicesSection;
