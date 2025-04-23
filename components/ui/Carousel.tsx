import { useRef } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import RNCarousel, { ICarouselInstance } from "react-native-reanimated-carousel"; 

// Create an array of background colors for the carousel items
const backgroundColors = [
  '#FF9AA2', // Light pink
  '#FFB7B2', // Light salmon
  '#FFDAC1', // Light peach
  '#E2F0CB', // Light lime
  '#B5EAD7', // Light mint
  '#C7CEEA'  // Light periwinkle
];

// Create sample data with colors
const data = backgroundColors.map((color, index) => ({
  id: index,
  color: color,
  title: `Item ${index + 1}`
}));

const width = Dimensions.get("window").width;

// Keep your component name as Carousel
export const Carousel = () => { 
    const ref = useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    return (
        <GestureHandlerRootView>
            <View style={styles.container}>
                <RNCarousel 
                    ref={ref}
                    width={width - 30} 
                    height={width / 2.5}
                    data={data}
                    onProgressChange={progress}
                    renderItem={({ index }: { index: number }) => ( 
                        <View
                            style={[
                                styles.carouselItem,
                                { backgroundColor: data[index].color }
                            ]}
                        >
                            {/* You can add image placeholders here if needed */}
                        </View>
                    )}
                />
            </View>
        </GestureHandlerRootView>
    ); 
}; 

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15, // Match the search bar's horizontal margin
    },
    carouselItem: {
        flex: 1,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
});