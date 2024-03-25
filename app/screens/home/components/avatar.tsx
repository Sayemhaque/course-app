import { useAuth, useUser } from "@clerk/clerk-expo";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export const Avatar = () => {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
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
    </View>
  );
};
