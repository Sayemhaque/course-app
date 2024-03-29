import { useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function Profile() {
  const { user } = useUser();
  const { isLoaded, signOut } = useAuth();

  if (!user || !isLoaded) {
    return null;
  }

  return (
    <View className="mt-10 px-5">
      <Text className="text-2xl font-bold text-black">প্রোফাইল</Text>
      <View className="flex justify-center items-center space-y-5">
        <Image
          source={{ uri: user?.imageUrl }}
          alt="user image"
          className="w-32 h-32 mt-12 rounded-full"
          style={{ objectFit: "contain" }}
        />
        <Text className="text-2xl font-bold">{user.fullName}</Text>
      </View>
      <TouchableOpacity onPress={() => signOut()} className="mt-[140px]">
        <View>
          <Text className="text-white text-center font-bold text-sm bg-[#0C9587] py-2 rounded-lg px-3">
            লগ আউট korun joldo
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
