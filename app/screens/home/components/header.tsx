import { View, Text, Image } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { SignOut } from "./signout";

export default function Header() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View className="bg-gray-200">
      <View className="flex flex-row items-center justify-between border-b border-gray-200 py-2 mt-10 px-5">
        <View className="flex flex-row items-center gap-2">
          <Image
            source={require("./../../../../assets/logo.webp")}
            alt="user image"
            className="w-24 h-auto"
            style={{ objectFit: "contain" }}
          />
        </View>
        <SignOut />
      </View>
    </View>
  );
}
