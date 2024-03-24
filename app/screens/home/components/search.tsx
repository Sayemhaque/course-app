import { View, Text, TextInput } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="mt-5 bg-white border border-gray-300 py-2 rounded-full px-4 flex flex-row items-center ">
      <EvilIcons name="search" color={"green"} size={25} className="pr-6" />
      <TextInput placeholder="Search..." className="w-full py-[2px] pl-1" />
    </View>
  );
}
