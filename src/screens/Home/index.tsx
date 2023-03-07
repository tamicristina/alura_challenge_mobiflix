import React from "react";
import { ImageBackground, Text } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { ButtonContainer, Container } from "./styles";

export function Home() {
  const image = { uri: "https://img.youtube.com/vi/N546dnt2qxc/hqdefault.jpg" };
  return (
    <Container>
      <Header title="MOBIFLIX" />

      <ImageBackground
        source={image}
        style={{
          width: 450,
          height: 148,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <ButtonContainer>
          <Button label="Assista agora" />
        </ButtonContainer>
      </ImageBackground>
    </Container>
  );
}
