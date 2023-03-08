import styled from "styled-components/native";

export const Container = styled.View`
  min-width: 96px;
  max-width: 146px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
