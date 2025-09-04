import { Button } from '@mantine/core';
import type { ReactNode } from 'react';

type CtaButtonProps = {
  children: ReactNode;
};

export function CtaButton({ children }: CtaButtonProps) {
  return (
    <Button
      bg="#83EDA3"
      c="#021630"
      radius="sm"
      size="lg"
      fw={600}
      px="xl"
      onClick={() => window.open("https://wa.me/554430266080?text=Olá,%20entrei%20em%20contato%20através%20do%20site%20e%20quero%20esclarecer%20algumas%20dúvidas.", "_blank")}
    >
      {children}
    </Button>
  );
}