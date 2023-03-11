import React from "react";
import { ImageBackground, ScrollView, View } from "react-native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { categoriesColors } from "../../components/Tag/types";
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

      <ScrollViewContainer horizontal>
        {topCategoriesHighlights.map((category, index) => {
          let colorAndCategory = categoriesColors[index];

          if (category === colorAndCategory.category) {
            return (
              <TagContainer key={category}>
                <Tag color={colorAndCategory.color} label={category} />
              </TagContainer>
            );
          }
        })}
      </ScrollViewContainer>

      <VideosContainer>
        {videoData.map((video) => (
          <VideoPresentation
            video={video.image}
            categories={video.categories}
          />
        ))}
      </VideosContainer>
    </Container>
  );
}
