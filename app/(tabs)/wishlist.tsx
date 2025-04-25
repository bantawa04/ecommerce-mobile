import theme from "@/constants/theme";
import { View, StyleSheet, FlatList, Text, Dimensions, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import { Feather } from '@expo/vector-icons';

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Purity Glow Face Wash',
    price: 29.99,
    imageUrl: 'https://picsum.photos/id/1/200/200',
  },
  {
    id: 2,
    name: 'Eco-Friendly Bamboo Toothbrush Set',
    price: 12.99,
    imageUrl: 'https://picsum.photos/id/2/200/200',
  },
  {
    id: 3,
    name: 'Natural Beeswax Candles - Set of 3',
    price: 18.50,
    imageUrl: 'https://picsum.photos/id/3/200/200',
  },
  {
    id: 4,
    name: 'Reusable Organic Cotton Produce Bags',
    price: 15.99,
    imageUrl: 'https://picsum.photos/id/4/200/200',
  },
  {
    id: 5,
    name: 'Handmade Coconut Bowl Set with Wooden Spoons',
    price: 24.99,
    imageUrl: 'https://picsum.photos/id/5/200/200',
  },
  {
    id: 6,
    name: 'Natural Loofah Sponge - Pack of 4',
    price: 9.99,
    imageUrl: 'https://picsum.photos/id/6/200/200',
  },
];

export default function Wishlist() {
  
  const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <View style={styles.productImageContainer}>
        <Image
          source={item.imageUrl}
          style={styles.productImage}
          contentFit="cover"
          transition={200}
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productBrand}>Pure Luxe</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>${(item.price + 10).toFixed(2)}</Text>
          <Text style={styles.currentPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
      <Pressable style={styles.deleteButton} onPress={() => console.log('Delete item', item.id)}>
        <Feather name="trash-2" size={20} color={theme.colors.gray} />
      </Pressable>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  listContent: {
    padding: theme.spacing.md,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.md,
    padding: theme.spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  productImageContainer: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    backgroundColor: theme.colors.background,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productInfo: {
    flex: 1,
    marginLeft: theme.spacing.md,
    justifyContent: 'center',
  },
  productName: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 16,
    marginBottom: 2,
  },
  productBrand: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.gray,
    textDecorationLine: 'line-through',
    marginRight: theme.spacing.xs,
  },
  currentPrice: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
    color: theme.colors.primary,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.xs,
  },
});
