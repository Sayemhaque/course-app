import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <Text className="text-5xl bg-red-300"></Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
