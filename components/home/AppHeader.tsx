import { View, Text, Pressable } from "react-native";
import React from "react";
import { Menu } from "lucide-react-native";

const AppHeader = () => {
  return (
    <View className="flex-row w-full justify-between px-3 items-center h-12 shadow-lg">
      <Pressable>
        <Text className="text-3xl font-semibold">Pixels</Text>
      </Pressable>
      <Pressable>
        <Menu color="black" className="" size={30} />
      </Pressable>
    </View>
  );
};

export default AppHeader;
