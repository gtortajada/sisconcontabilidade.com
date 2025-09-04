import { SectionId } from "@/config/sections";
import { Box, BoxProps } from "@mantine/core";
import { ReactNode } from "react";

type SectionProps = {
  id: SectionId;
  children: ReactNode;
} & BoxProps;

export function Section({ id, children }: SectionProps) {
  return (
    <Box component="section" id={id} pt={56} pb="md">
      {children}
    </Box>
  );
}
