import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, TouchableOpacity, View } from "react-native";

export const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }
  return (
    <TouchableOpacity onPress={() => signOut()}>
      <View>
        <Text className="text-white text-center font-bold text-sm bg-[#0C9587] py-2 rounded-lg px-3">
          লগ আউট
        </Text>
      </View>
    </TouchableOpacity>
  );
};
