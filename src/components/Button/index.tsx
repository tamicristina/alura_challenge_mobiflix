import React from "react";
import { ButtonContainer, ButtonLabel, ButtonStyleProps } from "./styles";

interface Props{
  label?: string
  type?:ButtonStyleProps
  onPress?: ()=> void
}

export function Button ({label,onPress}:Props){
  return(<ButtonContainer onPress={onPress}>
    <ButtonLabel>
      {label}
    </ButtonLabel>
    </ButtonContainer>)
}