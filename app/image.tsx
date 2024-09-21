import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Image } from "expo-image";
import { ActivityIndicator } from "react-native-paper";
const ImageModal = () => {
  const params = useLocalSearchParams();
  const imageUrl = params?.webformatURL;
  const [loading, setLoading] = useState<boolean>(true);

  // handle on image load
  const handleOnLoad = () => {
    setLoading(false);
  };

  return (
    <BlurView
      tint="dark"
      intensity={60}
      style={{
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
      className="flex-1 items-center justify-center px-5"
    >
      <View className="w-full h-auto flex justify-center items-center">
        {loading && (
          <ActivityIndicator size="large" color="black" animating={true} />
        )}
      </View>

      <Image
        transition={100}
        style={{
          backgroundColor: "rgba(255,255,255,0.1)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
        className="h-[500] w-full rounded-lg"
        onLoad={() => handleOnLoad()}
        source={imageUrl}
      />

      <Text onPress={() => router.back()}>ImageModal</Text>
    </BlurView>
  );
};

export default ImageModal;
