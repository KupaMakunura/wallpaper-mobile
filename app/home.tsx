import AppHeader from '@/components/home/AppHeader';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className={`flex-1  pt-5 `}>
      <StatusBar backgroundColor="black" />
      <View className="w-full flex">
        <AppHeader />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
