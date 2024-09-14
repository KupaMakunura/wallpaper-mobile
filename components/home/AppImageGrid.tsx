import { useImageStore } from "@/store";
import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import AppImageCard from "./AppImageCard";

const AppImageGrid = () => {
  const images = useImageStore((state) => state.images);
  return (
    <View className="flex-row w-full space-x-1 h-auto  ">
      <MasonryFlashList
        className="space-x-1 mx-3"
        data={images}
        numColumns={1}
        estimatedItemSize={200}
        renderItem={({ item, index }) => (
          <AppImageCard properties={item} index={index} key={index} />
        )}
      />
    </View>
  );
};

export default AppImageGrid;
