import React from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Product } from './ProductGrid';
import theme from '@/constants/theme';

// Calculate item width based on screen width (2 items per row with spacing)
const { width } = Dimensions.get('window');
const itemWidth = (width - (theme.spacing.md * 2 + theme.spacing.lg)) / 2; // Horizontal margins + gap between items

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={product.imageUrl}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
      </View>
      <View style={styles.cardContent}>
        <Text>
          Brand
        </Text>
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
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.background,
    ...theme.shadows.sm
  },
  imageContainer: {
    padding: theme.spacing.xs, // Add padding between card border and image
  },
  image: {
    width: '100%',
    height: itemWidth - (theme.spacing.xs * 2), // Adjust height for padding
    borderRadius: theme.borderRadius.md, // Rounded corners for image
    backgroundColor: theme.colors.background,
  },
  cardContent: {
    padding: theme.spacing.sm,
  },
  name: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 600,
    fontFamily: theme.fontFamily.semiBold,
    color: theme.colors.dark,
    lineHeight: 18,
    marginBottom: theme.spacing.xs,
  },
  price: {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray,
  },
});