import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Image } from 'expo-image';
import theme from "@/constants/theme"; // Import the theme

export const Categories = () => {
    const data = [
        {
            id: 1,
            name: 'Category 1',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 2,
            name: 'Category 2',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 3,
            name: 'Category 3',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 4,
            name: 'Category 4'  ,
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 5,
            name: 'Category 5',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 6,
            name: 'Category 6',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 7,
            name: 'Category 7',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 8,
            name: 'Category 8',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 9,
            name: 'Category 9',
            imgUrl:"https://picsum.photos/200"
        },
        {
            id: 10,
            name: 'Category 10',
            imgUrl:"https://picsum.photos/200"
        }
    ]
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.categoriesRow}>
                    {data.map((category) => (
                        <View key={category.id} style={styles.categoryItem}>
                            <Image 
                                source={category.imgUrl} 
                                contentFit="cover"   
                                style={styles.image} 
                            />
                            <Text style={styles.categoryText}>{category.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: theme.spacing.md,
        marginVertical: theme.spacing.sm
    },
    heading: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 600,
        marginBottom: theme.spacing.lg
    },
    categoriesRow: {
        flexDirection: "row",
        gap: theme.spacing.lg
    },
    categoryItem: {
        alignItems: 'center',
        width: 80
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: theme.borderRadius.md,
        backgroundColor: theme.colors.background,
        marginBottom: theme.spacing.sm
    },
    categoryText: {
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        textAlign: 'center'
    }
});