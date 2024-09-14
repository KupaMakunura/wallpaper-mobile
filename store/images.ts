import { create } from "zustand";

interface ImageState {
  images: any[];
  setImages: (images: any[]) => void;
}

export const useImageStore = create<ImageState>((set, get) => ({
  images: [],
  setImages(newImages: any[]) {
    set({ images: newImages });
  },
}));
