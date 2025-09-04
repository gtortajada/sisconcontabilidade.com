"use client";

import { Accordion, Container, Title, rem } from "@mantine/core";
import { Section } from "../Section";

const data = [
  {
    value: "Sou MEI. O escritório pode me atender?",
    description:
      "Sim. Atendemos desde MEIs até empresas de grande porte. Para MEIs, oferecemos suporte com obrigações fiscais e planejamento para a migração ao Simples Nacional, se for o caso.",
  },
  {
    value: "Tenho empresa fora de Maringá. Vocês conseguem me atender?",
    description:
      "Sim! Atendemos empresas de todo o Brasil de forma 100% remota, com a mesma agilidade e qualidade do atendimento presencial.",
  },
  {
    value: "O que está incluso na contabilidade?",
    description:
      "Tudo o que sua empresa precisa para estar em dia com o governo: guias de impostos, folha de pagamento, procedimentos trabalhistas, pró-labore, obrigações acessórias, entrega de declarações e suporte com dúvidas fiscais e tributárias.",
  },
  {
    value: "Eu preciso de um contador para abrir minha empresa?",
    description:
      "Ter um escritório de contabilidade capacitado como o Siscon ao seu lado desde o início evita erros e garante que sua empresa comece regularizada, sem dores de cabeça. Além de cuidar do processo de abertura, podemos te orientar na escolha do melhor regime tributário e ajudar você a economizar desde o início.",
  },
  {
    value: "Vocês atendem quais tipos de empresa?",
    description:
      "Atendemos empresas de todos os portes, sejam MEIs, microempresas (ME), empresas de pequeno porte (EPP), entre outros, independente da área de atuação. Se você tem um CNPJ ou deseja abrir um, podemos te ajudar!",
  },
  {
    value: "Abertura de empresa está inclusa no serviço?",
    description:
      "Sim! Oferecemos o serviço de abertura de empresa com acompanhamento em todas as etapas: análise da atividade, registro nos órgãos competentes, escolha do regime tributário e entrega da documentação final. Tudo com agilidade e orientação personalizada.",
  },
  {
    value:
      "O que acontece se minha empresa não cumprir com as obrigações fiscais?",
    description:
      "O não cumprimento pode gerar multas, bloqueios, perda de benefícios fiscais e até problemas com o CNPJ, como a suspensão ou desenquadramento do Simples Nacional. Ter uma contabilidade ativa evita riscos e mantém sua empresa em dia com o Fisco.",
  },
  {
    value:
      "Quais obrigações contábeis minha empresa precisa cumprir mensalmente?",
    description:
      "Depende do tipo de empresa e regime tributário, mas em geral, é necessário emitir notas fiscais corretamente, gerar a folha de pagamento (se tiver funcionários), apurar e pagar tributos, além de enviar declarações obrigatórias ao governo. Nosso escritório cuida de tudo isso para que você foque no crescimento do seu negócio.",
  },
];

export default function FAQ() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Section bg="#e3edfb" id="faq">
      <Container size="sm">
        <Title
          ta="center"
          c="#0161DF"
          fz={{ base: rem(40), sm: rem(40) }}
          fw={800}
        >
          Dúvidas Frequentes:
        </Title>

        <Accordion
          defaultValue={data[0].value}
          variant="separated"
          radius="md"
          mt={{ base: rem(30), sm: rem(30) }}
          styles={{
            item: {
              backgroundColor: "#fff",
              border: "none",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            control: {
              paddingLeft: rem(15),
            },
            label: {
              color: "#0161DF",
              fontWeight: 600,
              fontSize: rem(17),
            },
            panel: {
              paddingTop: 0,
              fontSize: rem(15),
              color: "#495057",
            },
          }}
        >
          {items}
        </Accordion>
      </Container>
    </Section>
  );
}
