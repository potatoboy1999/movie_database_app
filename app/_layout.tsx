import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import './globals.css';



export default function RootLayout() {
  return <>
    <SafeAreaView className="w-full h-full">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }} />
        <Stack.Screen
          name="movies/[id]"
          options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  </>
}
