"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";

export default function Page() {
  return (
    <Box
      style={{
        backgroundImage: "url('/images/bg-resolucao-alta.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <Container px="xl">
        <Stack>
          <Flex direction="column" wrap="nowrap" justify="flex-start" gap="xl">
            <Image
              src="/images/siscon-horizontal-branco.svg"
              alt="Logo Siscon Contabilidade e Assessoria"
              width={200}
              height={200}
            />
            <Title c="#ffe139" fw="700" style={{ fontSize: "3rem" }}>Site em construção</Title>
            <Flex direction="column" justify="center" gap="md">
              <Text fw="700" size="xl">Siscon Contabilidade e Assessoria</Text>
              <Flex direction="column">
                <Text>Avenida Dr. Alexandre Rasgulaeff, 752.</Text>
                <Text>Jardim Alvorada, Maringá.</Text>
                <Text>(44) 3026-6080.</Text>
              </Flex>
              <Text> Segunda à sexta-feira - 8h às 11h30 e 13h às 18h</Text>
            </Flex>
            <Button
              c="#012552"
              bg="#83eda3"
              w="50%"
              maw="250"
              component="a"
              href="https://wa.me/554430266080"
              target="_blank"
              rel="noopener noreferrer"
              >Entre em contato</Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
