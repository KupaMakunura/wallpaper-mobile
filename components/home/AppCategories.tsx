import { categories } from "@/constants";
import { fetchImages } from "@/services";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { FlatList, Pressable, Text } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import { useImageStore } from "@/store";

const AppCategories = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const setImages = useImageStore((state) => state.setImages);
  const setSearchText = useImageStore(state=>state.setSearchText)

  useEffect(() => {
    // execute the fetch images function controlled by the category
    handleImageFetching();
  }, [activeCategory]);

  // handle image fetching

  const handleImageFetching = async () => {

    
    const data = await fetchImages({
      per_page: 50,
      safesearch: true,
      category: activeCategory!,
    }) as [];

    setImages(data);
  };

  // handle category change

  const handleCategoryChange = async (category: string) => {


    // empty the searchText Field

    setSearchText("")

    setActiveCategory(category)
    

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
