import styled from "styled-components/native";

export type ButtonStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type?: ButtonStyleProps;
};

export const ButtonContainer = styled.TouchableOpacity<Props>`
  background-color: ${({ theme }) => theme.COLORS.BLUE};
  width: 128px;
  height: 42.31px;
  align-items: center;
  justify-content: center;
  border-radius:8px
`;

export const ButtonLabel = styled.Text`
color: ${({ theme }) => theme.COLORS.WHITE};
`;
