import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Product } from './ProductGrid';

// Calculate item width based on screen width (2 items per row with spacing)
const { width } = Dimensions.get('window');
const itemWidth = (width - 50) / 2; // 50 = horizontal margins (15*2) + gap between items (20)

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Pressable style={styles.card}>
      <Image
        source={product.imageUrl}
        style={styles.image}
        contentFit="cover"
        transition={200}
      />
      <View style={styles.cardContent}>
        <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
          {product.name}
        </Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: itemWidth,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: itemWidth, // Square image
    backgroundColor: '#f0f0f0',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600', // semibold
    color: '#333',
    lineHeight: 18,
    marginBottom: 4,
  },
  price: {
    fontSize: 12, // smaller size as requested
    color: '#393F42', // specific color as requested
  },
});