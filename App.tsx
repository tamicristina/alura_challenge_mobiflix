import React from "react";
import theme from "./src/theme";
import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components";
import { useFonts, BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { ActivityIndicator } from "react-native/Libraries/Components/ActivityIndicator/ActivityIndicator";

export default function App() {
  const [fontsLoaded] = useFonts({ BebasNeue_400Regular });
  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
