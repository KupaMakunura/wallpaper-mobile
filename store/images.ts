import { create } from "zustand";

interface ImageState {
  images: any[];
  searchText?: string;
  setImages: (images: []) => void;
  setSearchText: (text: string) => void;
}

export const useImageStore = create<ImageState>((set, get) => ({
  images: [],
  setImages(images) {
    set({ images: images });
  },
  setSearchText(text) {
    if (text.length > 0) {
      set({ searchText: text });
    } else {
      set({ searchText: "" });
    }
  },
}));
