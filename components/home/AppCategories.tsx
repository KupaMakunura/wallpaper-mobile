import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { categories } from "@/constants";

const AppCategories = () => {
  interface CategoryItemProps {
    title: string;
    isActive: boolean;
    onChange: () => void;
  }
  const CategoryItem = ({ title ,onChange}: CategoryItemProps) => {
    return (
      <View className="w-auto  items-center bg-gray-200 rounded-full mx-1">
        <Pressable className="p-3" onPress={onChange}>
          <Text>{title}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex w-full px-5 py-3"
      data={categories}
      renderItem={({ item, index }) => (
        <CategoryItem key={index} title={item.name} onChange={()=>console.log("ok")} isActive />
      )}
    />
  );
};

export default AppCategories;
