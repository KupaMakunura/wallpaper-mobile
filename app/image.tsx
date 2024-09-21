import AppIconButton from "@/components/core/AppIconButton";
import { Entypo, Octicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const ImageModal = () => {
  const params = useLocalSearchParams();

  const imageUrl = params?.webformatURL as string;
  const imagePath = params?.previewURL as string;
  const imageName = imagePath.split("/").pop();

  const imageFilePath = `${FileSystem.documentDirectory}${imageName}`;

  const [loading, setLoading] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // handle on image load
  const handleOnLoad = () => {
    setLoading(false);
  };

  const downloadFile = async (): Promise<string | null> => {
    try {
      const { uri } = await FileSystem.downloadAsync(imageUrl, imageFilePath);

      // change downloading status

      if (uri) {
        setIsDownloading(false);
        // show toast when download is successful
      }

      return uri;
    } catch (error) {
      // set downloading status to false
      setIsDownloading(false);
      Alert.alert("Error downloading image");

      return null;
    }
  };
  // handle image download
  const handleImageDownload = async () => {
    setIsDownloading(true);
    await downloadFile();
  };

  // handle image sharing
  const handleShareImage = async () => {
    const imageURI = await downloadFile();
    await Sharing.shareAsync(imageURI!);
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
          onPress={() => handleImageDownload()}
          loading={isDownloading}
        />
        <AppIconButton
          icon={() => <Entypo name="share" color="white" size={24} />}
          onPress={() => handleShareImage()}
          loading={isDownloading}
        />
      </View>
    </BlurView>
  );
};

export default ImageModal;
