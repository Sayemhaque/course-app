import { View } from "react-native";
import React from "react";
import Header from "./components/header";
import Search from "./components/search";

export default function Home() {
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Header />
      <Search />
    </View>
  );
}
