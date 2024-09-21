import { Image } from "expo-image";
import React from "react";
import { Pressable } from "react-native";
import { router } from "expo-router";

interface Props {
  properties: any;
  index: number;
}
const AppImageCard = ({ properties }: Props) => {
  const handleRoute = () => {
    router.push({ pathname: "/image", params: properties });
  };
  return (
    <Pressable
      onPress={() => handleRoute()}
      className="w-full rounded-xl h-auto mb-3 mr-2 space-x-2 overflow-hidden "
    >
      <Image
        source={{ uri: properties?.webformatURL }}
        className="h-[300] w-full px-5 rounded"
        transition={100}
      />
      {/* put a bottom bar with like and comment icons */}
    </Pressable>
  );
};

export default AppImageCard;
