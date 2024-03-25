import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";
import { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPressSingIn = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      if (createdSessionId) {
        setActive && setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  const loginSchema = z.object({
    email: z
      .string()
      .email({ message: "Email must be valid" })
      .refine((email) => email.trim() !== "", { message: "Email is required" }),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters long" })
      .max(15, { message: "Password must be at most 15 characters long" })
      .refine((password) => password.trim() !== "", {
        message: "Password is required",
      }),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <View className="px-3 mt-14 bg-gray-200 h-screen">
      <Image
        source={require("./../../assets/logo.webp")}
        alt="sate"
        className="w-full"
        style={{ objectFit: "contain" }}
      />
      <View className="mt-12">
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
      <View className="mt-12">
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              className="border border-gray-300 h-12 rounded-lg px-3 bg-white"
            />
          )}
        />
        {errors.email && (
          <Text className="text-red-500">{errors.email.message}</Text>
        )}

        <View className="mt-5">
          <Controller
            name="password"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="password"
                className="border border-gray-300 h-12 rounded-lg px-3 bg-white"
              />
            )}
          />
          {errors.password && (
            <Text className="text-red-500">{errors.password.message}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} className="mt-[40px]">
        <View>
          <Text className="text-white text-center font-bold text-xl bg-[#0C9587] py-3 rounded-lg">
            লগ ইন করুন
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
