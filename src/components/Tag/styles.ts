import styled from "styled-components/native";

interface TagColorType {
  color?: string;
}

export const Container = styled.View<TagColorType>`
  min-width: 96px;
  max-width: 146px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-right:18px
`;

export const Label = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px 22px 6px 26px;
`;
