import AppCategories from "@/components/home/AppCategories";
import AppHeader from "@/components/home/AppHeader";
import AppImageGrid from "@/components/home/AppImageGrid";
import AppSearchBar from "@/components/home/AppSearchBar";
import React from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1  pt-5 `}>
      <StatusBar backgroundColor="black" />
      <View className="w-full flex">
        <AppHeader />
      </View>

      <ScrollView className="flex w-full">
        {/* searchBar */}
        <AppSearchBar />
        {/* filtering categories */}
        <AppCategories />

        {/* the image list */}
        <AppImageGrid />
        {/* app bottom sheet */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
