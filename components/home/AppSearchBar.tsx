import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useImageStore } from "@/store";
import { fetchImages } from "@/services";

const AppSearchBar = () => {
  const searchText = useImageStore((state) => state.searchText);
  const setSearchText = useImageStore((state) => state.setSearchText);

  // handle text change
  const handleSearchText = async (text: string) => {
    setSearchText(text);

    const data = fetchImages({ q: searchText, per_page: 50, safesearch: true });
  };

  return (
    <View className="w-full flex px-5  justify-center mt-5 ml-1">
      <Searchbar
        onChangeText={(value) => handleSearchText(value)}
        value={searchText!}
        placeholder="Hi"
        className="rounded-md bg-neutral-50 text-black"
      />
    </View>
  );
};

export default AppSearchBar;
