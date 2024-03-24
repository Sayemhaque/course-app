import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { SignOut } from "./signout";

export default function Header() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View className="flex flex-row items-center justify-between border-b border-gray-200 py-2">
      <View className="flex flex-row items-center gap-2">
        <View>
          <Image
            source={require("./../../../../assets/logo.webp")}
            alt="user image"
            className="w-24 h-auto"
            style={{ objectFit: "contain" }}
          />
        </View>
        {/* <View>
          <Text>Welcome,</Text>
          <Text className="font-semibold">{user.firstName}</Text>
        </View> */}
      </View>
      <SignOut />
    </View>
  );
}
