import { SearchBar } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

const AppSearchBar = () => {
  return (
    <View className="w-full flex px-5  justify-center mt-5 ml-1">
      <SearchBar
        placeholder="Search for photos..."
        cancelIcon={<Ionicons name="close-outline" size={28} color="black" />}
        searchIcon={<Feather name="search" size={25} color="black" />} // Added color for consistency
        inputContainerStyle={{
          backgroundColor: "white",
          borderRadius: 50,

          alignItems: "center",
          paddingHorizontal: 10, // Added padding for better spacing
        }}
        containerStyle={{
          backgroundColor: "white",
          borderColor: "white",
          borderRadius: 50,
          height: 55,
          borderWidth: 1, // Added borderWidth to give a visible border
          alignItems: "center",
          padding:5,
          marginHorizontal: 15, // Optional margin for spacing
        }}
        inputStyle={{
          fontSize: 18, // Adjusted fontSize for better readability
          marginLeft: 10, // Added marginLeft to provide spacing between the text and icon
        }}
      />
    </View>
  );
};

export default AppSearchBar;
