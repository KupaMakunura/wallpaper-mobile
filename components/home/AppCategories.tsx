import { View, Text, FlatList, Pressable } from "react-native";
import React, { useRef, useState } from "react";
import Animated, { FadeInRight } from "react-native-reanimated";
import { categories } from "@/constants";
import classNames from "classnames";

const AppCategories = () => {
  const [searchText, setSearchText] = useState<string>();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const searchInputRef = useRef(null);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  // one category item
  const CategoryItem = ({ title, index }: { title: string; index: number }) => {
    return (
      <Animated.View
        entering={FadeInRight.delay(index * 200)
          .duration(1000)
          .springify()
          .damping(14)}
        className={classNames({
          "w-auto  items-center bg-gray-200 rounded-lg mx-1": true,
          "bg-neutral-700 text-white": activeCategory === title,
        })}
      >
        <Pressable className="p-3" onPress={() => handleCategoryChange(title)}>
          <Text
            className={classNames({
              "text-white": activeCategory === title,
            })}
          >
            {title}
          </Text>
        </Pressable>
      </Animated.View>
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      className="flex w-full px-5 py-3"
      data={categories}
      renderItem={({ item, index }) => (
        <CategoryItem key={index} title={item.name} index={index} />
      )}
    />
  );
};

export default AppCategories;
