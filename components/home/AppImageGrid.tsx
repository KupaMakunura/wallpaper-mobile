import { useImageStore } from "@/store";
import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import AppImageCard from "./AppImageCard";

const AppImageGrid = () => {
  const images = useImageStore((state) => state.images);
  return (
    <View className="w-full px-5 h-auto">
      <MasonryFlashList
      
        data={images}
        numColumns={2}
        estimatedItemSize={200}
        renderItem={({ item, index }) => (
          <AppImageCard properties={item} index={index} key={index} />
        )}
      />
    </View>
  );
};

export default AppImageGrid;
