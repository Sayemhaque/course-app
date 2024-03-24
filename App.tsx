import { View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { config } from "./app.config";
import * as SecureStore from "expo-secure-store";
import Login from "./app/screens/login";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./app/navigations/tab-navigations";

export default function App() {
  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };
  return (
    <NavigationContainer>
      <ClerkProvider
        tokenCache={tokenCache}
        publishableKey={config.extra.clerkPublishableKey}
      >
        <SignedIn>
          <TabNavigation />
        </SignedIn>
        <View>
          <SignedOut>
            <Login />
          </SignedOut>
        </View>
      </ClerkProvider>
    </NavigationContainer>
  );
}
