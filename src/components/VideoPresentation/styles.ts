import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
  /* width:320px; */
  margin: 0 35px;
`;

export const Images = styled(Image)`
  width: 335px;
  height: 180px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 8px;
`;
export const ImageContainer = styled.View`
  /* margin-left: 20px; */

  align-items: center;
`;
export const TagContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ScrollViewContainer = styled.ScrollView``;
