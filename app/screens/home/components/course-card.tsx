import { View, Text, Image } from "react-native";
import React from "react";

export default function CourseCard({ course }) {
  return (
    <View className="px-5">
      <View className="mt-5">
        <Image
          source={{
            uri: `https://dev-assets.tajdidacademy.com/uploads/courses/${course.id}/thumbnails/${course.thumbnail}`,
          }}
          alt="user image"
          className="w-full h-[200px]"
          style={{ objectFit: "cover" }}
        />
      </View>
      <View>
        <Text className="text-xl font-bold">{course.title}</Text>
      </View>
    </View>
  );
}
