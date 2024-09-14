import { SearchImageParams } from "@/interfaces";
import axios from "axios";

// do the axios configuration
const PixelAPI = axios.create({
  baseURL: "https://pixabay.com/api/",
  params: {
    key: process.env.EXPO_PUBLIC_PIXEL_API_KEY!,
  },
});

// fetch the images

export const fetchImages = async (
  params: SearchImageParams
): Promise<[] | {}> => {
  try {
    const response = await PixelAPI.get("");

    return response.data.hits;
  } catch (e) {
    const response = {
      error: true,
    };
    return response;
  }
};
