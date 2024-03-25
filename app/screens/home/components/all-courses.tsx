import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import CourseCard from "./course-card";

export default function AllCourse() {
  const { data, isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.dev.tajdidacademy.com/courses?status=PUBLISHED&includeLessonCount=true"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return null;
  }

  return (
    <View>
      <View className="mt-5 px-5">
        <Text className="text-2xl font-bold text-black">সকল কোর্সসমূহ</Text>
      </View>
      <FlatList
        data={data.data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CourseCard course={item} />}
      />
    </View>
  );
}
