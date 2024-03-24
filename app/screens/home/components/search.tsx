import { View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function Search() {
  return (
    <View className="px-5">
      <View className="mt-5 bg-gray-200 border border-gray-300 py-2 rounded-full px-4 flex flex-row items-center">
        <EvilIcons name="search" color={"green"} size={25} className="pr-6" />
        <TextInput placeholder="Search..." className="w-full py-[2px] pl-1" />
      </View>
    </View>
  );
}
