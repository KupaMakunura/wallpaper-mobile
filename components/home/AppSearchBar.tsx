import { fetchImages } from "@/services";
import { useImageStore } from "@/store";
import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const AppSearchBar = () => {
  const searchText = useImageStore((state) => state.searchText);
  const setSearchText = useImageStore((state) => state.setSearchText);
  const setImages = useImageStore((state) => state.setImages);

  // handle text change
  const handleSearchText = async () => {
    // fetch the data for search
    const data = (await fetchImages({
      q: searchText,
      per_page: 50,
      safesearch: true,
    })) as [];
    setImages(data);
  };

  const handleClearSearchText = () => {
    setSearchText("");
  };

  return (
    <View className="w-full flex px-5  justify-center mt-5 ml-1">
      <Searchbar
        onChangeText={(value) => setSearchText(value)}
        value={searchText!}
        onIconPress={() => handleSearchText()}
        placeholder="Search for photos ..."
        className="rounded-lg bg-neutral-50 text-black"
        inputStyle={{
          color: "black",
        }}
        placeholderTextColor="gray"
        clearIcon={() => <MaterialIcons name="clear" size={28} color="black" />}
        icon={() => <Ionicons name="search-outline" size={28} color="black" />}
        onClearIconPress={() => handleClearSearchText()}
      />
    </View>
  );
};

export default AppSearchBar;
