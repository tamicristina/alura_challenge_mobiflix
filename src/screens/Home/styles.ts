import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BLACK_LIGHT};
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 390px;
  height: 138px;
  align-items: center;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  margin-bottom: 20px;
`;

export const ScrollViewContainer = styled.ScrollView`
  flex: 0.1;
`;

export const TagContainer = styled.View`
  flex-direction: row;
  padding: 0 35px;
`;

export const VideosContainer = styled.ScrollView`
  flex: 1;
`;
