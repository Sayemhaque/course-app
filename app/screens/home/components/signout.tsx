import { useAuth, useUser } from "@clerk/clerk-expo";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export const SignOut = () => {
  const { isLoaded, signOut } = useAuth();
  const { isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  return (
    <View className="flex flex-row items-center gap-2">
      <View>
        <Image
          source={{ uri: user?.imageUrl }}
          alt="user image"
          className="w-10 h-10 rounded-full"
          style={{ objectFit: "cover" }}
        />
      </View>
      <TouchableOpacity onPress={() => signOut()}>
        <View>
          <Text className="text-white text-center font-bold text-sm bg-[#0C9587] py-2 rounded-lg px-3">
            লগ আউট
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
