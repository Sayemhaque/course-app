import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive && setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image
        source={require("./../../assets/7618742.jpg")}
        alt="sate"
        className="w-full h-[300px] object-cover"
        style={{ objectFit: "contain" }}
      />
      <View className="px-5 mt-12">
        <Button title="Login" onPress={onPress} />
      </View>
    </View>
  );
}
