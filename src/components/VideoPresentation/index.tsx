import React from "react";
import { Image, ScrollView } from "react-native";
import { Tag } from "../Tag";
import { categoriesColors } from "../Tag/types";
import { Container, ImageContainer, TagContainer, Images } from "./styles";
import { StyleSheet } from "react-native";

interface Props {
  video: string;
  categories: string[];
}
export function VideoPresentation({ categories, video }: Props) {
  return (
    <Container>
      <ScrollView
        horizontal
        contentContainerStyle={{
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        {categories.map((category, index) => {
          let colorAndCategory = categoriesColors[index];

          if (category === colorAndCategory.category) {
            return (
              <TagContainer key={category}>
                <Tag color={colorAndCategory.color} label={category} />
              </TagContainer>
            );
          }
        })}
      </ScrollView>
      <ImageContainer>
        <Images
          source={{
            uri: video,
          }}
        />
      </ImageContainer>
    </Container>
  );
}
