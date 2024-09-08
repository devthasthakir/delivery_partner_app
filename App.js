import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

// Navigation Import
import Navigation from "./src/navigation";
import { useColorScheme } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { loadTheme } from "./src/store/themeSlice";
import { store } from "./src/store/store";
import { useFonts } from "expo-font";

const App = () => {
  const dispatch = useDispatch();
  const systemScheme = useColorScheme();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(loadTheme(systemScheme));
  }, [dispatch, systemScheme]);

  return (
    <NavigationContainer theme={theme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default function RootApp() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Bold": require("./src/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Thin": require("./src/assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("./src/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraLight": require("./src/assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
