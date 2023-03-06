import styled from "styled-components/native";

export type HeaderStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: HeaderStyleProps;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BLACK_DARK};
  width: 100%;
  height: 150px;
  justify-content: center;
  /* align-items: center; */
`;

export const Title = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.BLUE : theme.COLORS.WHITE};
  font-size: 32px;
  font-size: 32px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  text-align: ${({ type }) => (type === "PRIMARY" ? "center" : "left")};
  padding-left: ${({ type }) => (type === "PRIMARY"? 0 : 36)}
`;
