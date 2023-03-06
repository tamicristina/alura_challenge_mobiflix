import { ThemeProvider } from "styled-components";
import { ActivityIndicator, StatusBar } from "react-native";
import { BebasNeue_400Regular, useFonts } from "@expo-google-fonts/bebas-neue";


import theme from "./src/theme";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ BebasNeue_400Regular });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}