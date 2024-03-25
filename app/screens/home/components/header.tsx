import { View, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { Avatar } from "./avatar";

export default function Header() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View className="bg-white py-6 rounded-b-[15px]">
      <View className="flex flex-row items-center justify-between  mt-10 px-5">
        <View className="flex flex-row items-center gap-2">
          <Image
            source={require("./../../../../assets/logo.webp")}
            alt="user image"
            className="w-24 h-auto"
            style={{ objectFit: "contain" }}
          />
        </View>
        <Avatar />
      </View>
    </View>
  );
}
