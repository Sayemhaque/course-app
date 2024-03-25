import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/home";

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
