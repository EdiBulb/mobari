import { DarkTheme, DefaultTheme, Tabs, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { Colors } from "@/constants/theme";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme === "dark" ? "dark" : "light"];

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.text,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.backgroundElement,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "오늘",
            tabBarLabel: "오늘",
          }}
        />
        <Tabs.Screen
          name="photos"
          options={{
            title: "사진",
            tabBarLabel: "사진",
          }}
        />
        <Tabs.Screen
          name="change"
          options={{
            title: "변화",
            tabBarLabel: "변화",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "프로필",
            tabBarLabel: "프로필",
          }}
        />
      </Tabs>
    </ThemeProvider>
  );
}
