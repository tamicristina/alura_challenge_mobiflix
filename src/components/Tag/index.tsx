import React from "react";
import { Container, Label } from "./styles";

interface Props {
  label: string;
  color: string;
}

export function Tag({ label, color }: Props) {
  return (
    <Container color={color}>
      <Label>{label}</Label>
    </Container>
  );
}
