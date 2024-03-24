import { Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { config } from "./app.config";
import * as SecureStore from "expo-secure-store";
import Login from "./app/screens/login";
import Home from "./app/screens/home/home";

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
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={config.extra.clerkPublishableKey}
    >
      <View>
        {/* Sign In Component */}
        <SignedIn>
          <Home />
        </SignedIn>

        {/* Sign Out */}
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
