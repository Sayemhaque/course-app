import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/home";
import Profile from "../screens/profile/profile";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "react-native";
import MyCourses from "../screens/my-courses/my-course";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#2CD5BD",
      }}
    >
      <Tab.Screen
        name="সকল কোর্সসমূহ"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>সকল কোর্সসমূহ</Text>
          ),
        }}
      />
      <Tab.Screen
        name="আমার কোর্সসমূহ"
        component={MyCourses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="playlist-add-check" size={35} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>আমার কোর্সসমূহ</Text>
          ),
        }}
      />
      <Tab.Screen
        name="প্রোফাইল"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>প্রোফাইল</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
