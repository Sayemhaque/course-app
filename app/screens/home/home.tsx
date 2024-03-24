import { Text, Image, SafeAreaView, View } from "react-native";
import React from "react";
import { SignOut } from "../signout";

export default function Home() {
  return (
    <View>
      <Image
        source={require("./../../../assets/7618742.jpg")}
        alt="sate"
        className="w-7 h-7 object-cover"
        style={{ objectFit: "contain" }}
      />
      <Text className="text-5xl font-bold px-4 text-center">
        Welcome to, <Text className="text-green-500">Tajdid Academy</Text>
      </Text>
      <SignOut />
    </View>
  );
}
