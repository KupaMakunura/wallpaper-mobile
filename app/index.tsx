import {screenHeight, screenWidth} from "@/utils";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import Animated, {FadeInDown} from "react-native-reanimated";
import {Button} from "react-native-paper";
import {router} from "expo-router";

const WelcomeScreen = () => {
    return (
        <View className="flex-1">
            <StatusBar style="light"/>
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
                    start={{x: 0.5, y: 0}}
                    end={{x: 0.5, y: 0.8}}
                />
            </Animated.View>
            {/* content */}
            <View className="flex-1 items-center justify-end gap-1 py-5">
                <Animated.Text
                    entering={FadeInDown.delay(400).springify()}
                    className="text-5xl text-neutral-500 font-bold"
                >
                    Pixels
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(500).springify()}
                    className="space-x-2 font-medium"
                >
                    Every Pixel Tells a Story
                </Animated.Text>
                {/* button */}

                <Animated.View
                    entering={FadeInDown.delay(600).springify()}
                    className="py-5 w-full flex px-12"
                >
                    <Button
                        onPress={() => router.push("./home")}
                        className="bg-neutral-800 rounded-md py-1 "
                    >

                        <Text className="text-white">
                            Start Explore
                        </Text>

                    </Button>
                </Animated.View>
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
