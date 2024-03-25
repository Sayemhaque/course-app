import { View, Text, Image } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";

export default function CourseCard({ course }: { course: any }) {
  const discountPrice = course.discount
    ? course.price * (1 - course.discount / 100)
    : course.price;

  const totalLesson =
    course.modules?.reduce((acc: any, curr: { _count: { lessons: any } }) => {
      return (curr._count?.lessons ?? 0) + acc;
    }, 0) ?? 0;

  return (
    <View className="px-5 mt-8">
      <View className="w-[280px]   bg-white rounded-lg overflow-hidden">
        <View>
          <Image
            source={{
              uri: `https://dev-assets.tajdidacademy.com/uploads/courses/${course.id}/thumbnails/${course.thumbnail}`,
            }}
            alt="user image"
            className="w-full h-[200px]"
            style={{ objectFit: "cover" }}
          />
        </View>

        <View className="px-3 py-2 space-y-1">
          <Text className="text-lg font-bold">
            {course.title.substring(0, 22)}...
          </Text>

          <View className="flex flex-row items-center gap-2">
            <Foundation name="play-video" size={24} color="black" />
            <Text className="text-lg">{totalLesson}</Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Text className="text-lg font-bold text-green-600">
              ৳ {discountPrice === 0 ? "ফ্রী" : discountPrice}
            </Text>
            {discountPrice !== 0 && (
              <Text className="text-sm font-normal text-gray-700 line-through">
                ৳ {course.price}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
