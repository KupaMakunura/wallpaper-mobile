import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const screenWidth = (percentage: number) => {
  return (percentage * deviceWidth) / 100;
};


export const screenHeight = (percentage: number) => {
    return (percentage * deviceHeight) / 100;
  };
  