import { Image } from "expo-image";
import React from "react";
import { Pressable } from "react-native";

interface Props {
  properties: any;
  index: number;
}
const AppImageCard = ({ properties }: Props) => {
  return (
    <Pressable className="w-full px-3 rounded-md">
      <Image
        source={{ uri: properties?.webformatURL }}
        className="h-[300] w-full px-5"
        transition={100}
      />
    </Pressable>
  );
};

export default AppImageCard;
