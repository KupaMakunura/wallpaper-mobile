import { TamaguiProvider, View } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const UIProvider = ({ children }: Props) => (
  <TamaguiProvider config={tamaguiConfig}>{children}</TamaguiProvider>
);

export default UIProvider;
