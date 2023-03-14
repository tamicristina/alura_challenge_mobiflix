import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 0.5;
  /* justify-content: center; */
  align-items: center;
`;

export const Images = styled(Image)`
  width: 320px;
  height: 180px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
`;
export const ImageContainer = styled.View`
  margin-left: 20px;

  align-items: center;
`;
export const TagContainer = styled.View`
  margin-bottom: 8px;
  background-color: red;
`;

export const ScrollViewContainer = styled.ScrollView``;
