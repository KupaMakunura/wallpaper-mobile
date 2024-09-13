import React from "react";
import { PaperProvider } from "react-native-paper";

interface Props {
  children: React.ReactNode;
}
const UIProvider = ({ children }: Props) => {
  return <PaperProvider>{children}</PaperProvider>;
};

export default UIProvider;
