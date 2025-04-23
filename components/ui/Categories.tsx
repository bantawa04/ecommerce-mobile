import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Image } from 'expo-image';

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
            <Text style={styles.heading}>Category</Text>
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
        marginHorizontal: 15,
        marginVertical: 10
    },
    heading: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 12
    },
    categoriesRow: {
        flexDirection: "row",
        gap: 30
    },
    categoryItem: {
        alignItems: 'center',
        width: 80
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 8
    },
    categoryText: {
        fontSize: 14,
        textAlign: 'center'
    }
});