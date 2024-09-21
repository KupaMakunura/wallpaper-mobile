import React from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useImageStore } from "@/store";
import { fetchImages } from "@/services";

import {Ionicons,MaterialIcons} from '@expo/vector-icons';

const AppSearchBar = () => {
  const searchText = useImageStore((state) => state.searchText);
  const setSearchText = useImageStore((state) => state.setSearchText);

  // handle text change
  const handleSearchText = async (text: string) => {
    setSearchText(text);

    const data = fetchImages({ q: searchText, per_page: 50, safesearch: true });
  };

  const handleClearSearchText = ()=>{
    setSearchText("");
  }

  return (
    <View className="w-full flex px-5  justify-center mt-5 ml-1">
      <Searchbar
        onChangeText={(value) => handleSearchText(value)}
        value={searchText!}
        placeholder="Search for photos ..."
        className="rounded-full bg-neutral-50 text-black"
        inputStyle={{
          color:"black",
        }}
        placeholderTextColor="gray"
        clearIcon={()=><MaterialIcons name="clear" size={24} color="gray" />}
        icon={()=><Ionicons name="search-outline" size={24} color="gray"/>}
        onClearIconPress={()=>handleClearSearchText()}
      />
    </View>
  );
};

export default AppSearchBar;
