import axios from "axios";
import { SearchImageParams } from "@/interfaces";

// do the axios configuration
const PixelAPI = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: process.env.EXPO_PUBLIC_PIXEL_API_KEY!,
  },
});

// fetch the images

export const fetchImages = async (params: SearchImageParams) => {
  try {
    const response = await PixelAPI.get("", );

    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
};
