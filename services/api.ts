import { SearchImageParams } from '@/interfaces';
import axios from 'axios';

// do the axios configuration
const PixelAPI = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '45972738-820fd57ccb5d06fe6a0a4cd16',
  },
});

// fetch the images

export const fetchImages = async (
  params: SearchImageParams
): Promise<[] | {}> => {
  try {
    const response = await PixelAPI.get('', { params: params });

    return response.data.hits;
  } catch (e) {
    const response = {
      error: true,
    };
    return response;
  }
};
