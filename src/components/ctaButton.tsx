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
    >
      {children}
    </Button>
  );
}