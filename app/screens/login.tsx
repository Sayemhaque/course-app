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

  const onPressSingIn = React.useCallback(async () => {
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
    <View className="px-3">
      <Image
        source={require("./../../assets/7618742.jpg")}
        alt="sate"
        className="w-full max-h-[300px] object-cover"
        style={{ objectFit: "contain" }}
      />
      <View className="mt-14">
        <Text className="text-2xl font-bold text-[#0E776D]">
          তাজদিদ একাডেমিতে{" "}
          <Text className="text-5xl font-bold  text-black">স্বাগতম জানাই</Text>
        </Text>
      </View>
      <View>
        <Text className="text-sm font-bold  text-gray-500">
          তাজদিদ একাডেমি একটি অনলাইন ইসলামিক পাঠদান প্রতিষ্ঠান। পরিশুদ্ধ জ্ঞানে
          জীবন হোক সুন্দর।
        </Text>
      </View>
      <TouchableOpacity onPress={onPressSingIn} className="mt-[100px]">
        <View>
          <Text className="text-white text-center font-bold text-xl bg-[#0C9587] py-4 rounded-lg">
            লগ ইন করুন
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
