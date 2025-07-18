"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
} from "@tabler/icons-react";
export default function Page() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E8E8E8 0%, #f5f5f5 100%)",
        backgroundImage: "url(/images/construction-background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <Center style={{ minHeight: "100vh" }}>
          <Stack
            align="center"
            gap="xl"
            style={{ textAlign: "center", maxWidth: "600px" }}
          >
            <Title
              order={1}
              size="3rem"
              fw={700}
              style={{
                color: "#0160DF",
                marginBottom: "10px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Siscon Contabilidade
            </Title>

            <Title
              order={2}
              size="2rem"
              fw={500}
              style={{
                color: "#333",
                marginBottom: "30px",
              }}
            >
              Site em construção
            </Title>
            <Group justify="center" gap="md" style={{ marginBottom: "60px" }}>
              <Button
                leftSection={<IconPhone size={20} />}
                size="lg"
                style={{
                  backgroundColor: "#0160DF",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(1, 96, 223, 0.3)",
                  transition: "all 0.3s ease",
                }}
                component="a"
                href="tel:+554430266080"
              >
                Telefone
              </Button>
              <Button
                leftSection={<IconBrandWhatsapp size={20} />}
                size="lg"
                style={{
                  backgroundColor: "#25D366",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
                  transition: "all 0.3s ease",
                }}
                component="a"
                href="https://wa.me/5511999999999"
                target="_blank"
              >
                WhatsApp
              </Button>
              <Button
                leftSection={<IconBrandInstagram size={20} />}
                size="lg"
                style={{
                  backgroundColor: "#d62976",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 24px",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "0 4px 15px rgba(228, 64, 95, 0.3)",
                  transition: "all 0.3s ease",
                }}
                component="a"
                href="https://instagram.com/siscon_contabilidade"
                target="_blank"
              >
                Instagram
              </Button>
            </Group>
          </Stack>
        </Center>
      </Container>

      <Box
        component="a"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(1, 96, 223, 0.9)",
          color: "white",
          textAlign: "center",
          padding: "15px",
          zIndex: 3,
          backdropFilter: "blur(10px)",
        }}
        href="https://gtortajada.online"
        target="_blank"
      >
        <Text size="sm" fw={500}>
          Copyright © by Gustavo Tortajada.
        </Text>
      </Box>
    </Box>
  );
}
