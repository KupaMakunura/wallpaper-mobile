import { useImageStore } from "@/store";
import { MasonryFlashList } from "@shopify/flash-list";
import React from "react";
import { View ,Text} from "react-native";
import AppImageCard from "./AppImageCard";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

const AppImageGrid = () => {
    const images = useImageStore((state) => state.images);
    // return an view for not found results
    if(images.length === 0){
        return (
            <View className="w-full flex justify-center items-center mt-48">
            
                <Link href='/home'>
                <Button   
                    className="bg-neutral-800 rounded-md py-1 px-10"
                    >
                        <Text className="text-white">
                         Oops Try again
                        </Text>

                    </Button>
                </Link>
               
            </View>
        )
    }
    return (
        <View className="flex-row w-full space-x-1 h-auto px-3  ">
            <MasonryFlashList
                className="space-x-1 mx-3 h-auto"
                data={images}
                numColumns={1}
                estimatedItemSize={200}
                renderItem={({item, index}) => (
                    <AppImageCard properties={item} index={index} key={index}/>
                )}
            />
        </View>
    );
};

export default AppImageGrid;
