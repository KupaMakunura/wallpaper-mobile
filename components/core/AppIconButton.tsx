import React from "react";
import { IconButton, IconButtonProps } from "react-native-paper";

const AppIconButton = (props: IconButtonProps) => {
  return (
    <IconButton
      icon={props.icon}
      mode="contained"
      style={{
        backgroundColor: "rgba(255,255,255,0.2)",
      }}
      className="rounded-lg"
      size={20}
      onPress={props.onPress}
    />
  );
};

export default AppIconButton;
