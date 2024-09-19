import UIProvider from "@/providers/UIProvider";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-reanimated";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Quicksand: require("../assets/fonts/Quicksand-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <UIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/*<Stack.Screen name="home" options={{ headerShown: false }} />*/}
      </Stack>
    </UIProvider>
  );
}
