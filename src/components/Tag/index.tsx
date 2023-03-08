import React from "react";
import { Container, Label } from "./styles";

interface Props {
  label: string;
}

export function Tag({ label }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
    </Container>
  );
}
