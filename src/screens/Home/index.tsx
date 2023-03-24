import React, { useEffect } from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Categories, colors } from "../../components/Tag/types";
import { VideoPresentation } from "../../components/VideoPresentation";
import { videoData } from "../../services/dados";
import {
  ButtonContainer,
  Container,
  ScrollViewContainer,
  TagContainer,
  VideosContainer,
} from "./styles";

export function Home() {
  const image = { uri: "https://img.youtube.com/vi/N546dnt2qxc/hqdefault.jpg" };

  const topCategoriesHighlights = videoData[0].categories;

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

      <ScrollViewContainer
        horizontal
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TagContainer>
          {topCategoriesHighlights.map((category) => {
            return (
              <Tag
                color={colors[Categories[category]]}
                label={category}
                key={category}
              />
            );
          })}
        </TagContainer>
      </ScrollViewContainer>

      <VideosContainer>
        {videoData.slice(1).map((video) => (
          <VideoPresentation
            video={video.image}
            categories={video.categories}
            key={video.name}
          />
        ))}
      </VideosContainer>
    </Container>
  );
}
