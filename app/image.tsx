import { Entypo, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";
import { ActivityIndicator, IconButton } from "react-native-paper";
import AppIconButton from "@/components/core/AppIconButton";

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
      {/* the actions */}
      <View className="flex-row w-full justify-between px-10 mt-5">
        <AppIconButton
          icon={() => <Octicons name="x" size={24} color="white" />}
          onPress={() => router.back()}
        />
        <AppIconButton
          icon={() => <Octicons name="download" size={24} color="white" />}
        />
        <AppIconButton
          icon={() => <Entypo name="share" color="white" size={24} />}
        />
      </View>
    </BlurView>
  );
};

export default ImageModal;
