import { screenHeight, screenWidth } from "@/utils";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const WelcomeScreen = () => {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        className={`h-[${screenHeight(100)}px] w-[${screenWidth(
          100
        )}px] absolute`}
        source={require("../assets/images/welcome.png")}
        resizeMode="cover"
      />

      {/* linear gradient */}

      <Animated.View
        entering={FadeInDown.duration(60)}
        className="flex-1 bottom-0 absolute"
      >
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
      </Animated.View>
      {/* content */}
      <View className="flex-1 items-center justify-end gap-1 py-5">
        <Text className="text-5xl text-neutral-500 font-bold">Pixels</Text>
        <Text className="space-x-2 font-medium">Every Pixel Tells a Story</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    width: screenWidth(100),
    height: screenHeight(65),
    bottom: 0,
    position: "absolute",
  },
});

export default WelcomeScreen;
