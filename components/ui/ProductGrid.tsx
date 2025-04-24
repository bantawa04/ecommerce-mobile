import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { ProductCard } from './ProductCard';
import theme from '@/constants/theme';

// Product type definition
export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: 'Organic Essential Oil Diffuser with Natural Bamboo Base',
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

// ProductGrid Component
export const ProductGrid = ({ products = sampleProducts }: { products?: Product[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Best Sellers</Text>
      <View >
        <View style={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.md,
    marginVertical: theme.spacing.sm
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: "600", // Changed to numeric value
    marginBottom: theme.spacing.lg
  },
});

export default ProductGrid;