"use client";

import { Accordion, Box, Group, Text, Title } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export const data = [
  {
    value: "Sou MEI. O escritório pode me atender?",
    description:
      "Sim. Atendemos desde MEIs até empresas de grande porte. Para MEIs, oferecemos suporte com obrigações fiscais e planejamento para a migração ai Simples Nacional, se for o caso.",
  },
  {
    value: "Tenho empresa fora de Maringá. Vocês conseguem me atender?",
    description:
      "NSim! Atendemos empresas de todo o Brasil de forma 100% remota, com a mesma agilidade e qualidade do atendimento presencial.",
  },
  {
    value: "O que está incluso na contabilidade?",
    description:
      "Tudo o que sua empresa precisa para estar em dia com o governo: guias de impostos, folha de pagamento, procedimentos trabalhistas, pró-labore, obrigações acessórias, entrega de declarações e suporte com dúvidas fiscais e tributárias.",
  },
];

export function FAQ() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>
        <Group>
          <Text>{item.value}</Text>
        </Group>
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="xs" c="black">{item.description}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Box bg="#02BDEF" p="sm">
      <Title order={2} m="md" ta="center" c="#0161DF">Dúvidas Frequentes</Title>
      <Accordion
        m="lg"
        chevronPosition="right"
        defaultValue="Apples"
        chevronSize={24}
        variant="separated"
        disableChevronRotation
        styles={{
          item: { border: "1px solid var(--mantine-color-gray-3)" },
          chevron: { "&[data-rotate]": { transform: "rotate(45deg)" } },
        }}
        chevron={
          <IconPlus
            style={{
              width: "var(--accordion-chevron-size)",
              height: "var(--accordion-chevron-size)",
            }}
          />
        }
      >
        {items}
      </Accordion>
    </Box>
  );
}
