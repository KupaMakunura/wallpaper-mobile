import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider } from 'react-native-paper';

interface Props {
  children: React.ReactNode;
}

const UIProvider = ({ children }: Props) => {
  return (
    <GestureHandlerRootView className="flex-1">
      <PaperProvider>{children}</PaperProvider>
    </GestureHandlerRootView>
  );
};

export default UIProvider;
