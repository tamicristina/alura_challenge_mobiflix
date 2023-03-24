import React from "react";
import { Image, ScrollView } from "react-native";
import { Tag } from "../Tag";
import { Categories, colors } from "../Tag/types";
import { Container, ImageContainer, TagContainer, Images } from "./styles";
import { StyleSheet } from "react-native";

interface Props {
  video: string;
  categories: (keyof typeof Categories)[];
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
        <TagContainer>
          {categories.map((category) => {
            return (
              <Tag
                color={colors[Categories[category]]}
                label={category}
                key={category}
              />
            );
          })}
        </TagContainer>
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
