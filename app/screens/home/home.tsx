import { View } from "react-native";
import AllCourse from "./components/all-courses";
import Header from "./components/header";
import Search from "./components/search";

export default function Home() {
  return (
    <View className="bg-gray-200 h-screen">
      <Header />
      <Search />
      <AllCourse />
    </View>
  );
}
