import AppCategories from "@/components/home/AppCategories";
import AppHeader from "@/components/home/AppHeader";
import AppImageGrid from "@/components/home/AppImageGrid";
import AppSearchBar from "@/components/home/AppSearchBar";
import React from "react";
import { ScrollView, StatusBar, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1  pt-5 w-screen`}>
      <StatusBar backgroundColor="black" />
      <View className="w-full flex">
        <AppHeader />
      </View>

      <ScrollView className="gap-[15]">
        {/* searchBar */}
        <AppSearchBar />
        {/* filtering categories */}
        <AppCategories />

        {/* the image list */}
        <AppImageGrid />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
