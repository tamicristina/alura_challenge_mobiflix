import React from "react";
import { Container, HeaderStyleProps, Title } from "./styles";

interface Props {
  title?: string;
  style?: HeaderStyleProps;
}

export function Header({ title }: Props) {
  return (
    <Container>
      <Title type="PRIMARY">{title}</Title>
    </Container>
  );
}
