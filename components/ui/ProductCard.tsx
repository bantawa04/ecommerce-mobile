import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Product } from './ProductGrid';
import theme from '@/constants/theme';
import { AntDesign } from '@expo/vector-icons';


const { width } = Dimensions.get('window');
const itemWidth = (width - (theme.spacing.md * 2 + theme.spacing.lg)) / 2; // Horizontal margins + gap between items

export const ProductCard = ({ product }: { product: Product }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={product.imageUrl}
          style={styles.image}
          contentFit="cover"
          transition={200}
        />
        
        {/* Wishlist heart icon */}
        <Pressable 
          style={styles.heartButton}
          onPress={() => setIsFavorite(!isFavorite)}
        >
          <AntDesign name={isFavorite ? "heart" : "hearto"} size={12} color={isFavorite ? theme.colors.primary : theme.colors.white} />
        </Pressable>
        
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{2}%</Text>
          </View>
        
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.brand}>
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
    padding: theme.spacing.xs,
    position: 'relative', 
  },
  image: {
    width: '100%',
    height: itemWidth - (theme.spacing.xs * 2),
    borderRadius: theme.borderRadius.md, 
    backgroundColor: theme.colors.background,
  },
  cardContent: {
    padding: theme.spacing.sm,
  },
  brand: {
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.dark,
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
  heartButton: {
    position: 'absolute',
    top: theme.spacing.sm,
    right: theme.spacing.sm,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // White with opacity
    borderRadius: theme.borderRadius.round,
    padding: 6,
    zIndex: 10,
    ...theme.shadows.sm
  },
  discountBadge: {
    position: 'absolute',
    top: theme.spacing.sm,
    left: theme.spacing.sm,
    backgroundColor:theme.colors.primary,
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    zIndex: 10,
  },
  discountText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.xs,
    fontFamily: theme.fontFamily.semiBold,
  },
});