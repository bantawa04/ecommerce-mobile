import theme from "@/constants/theme";
import { View, StyleSheet, FlatList, Text, Alert, TouchableOpacity, Animated } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Image } from 'expo-image';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
  const [wishlistItems, setWishlistItems] = useState(products);
  
  // Remove the single animation value
  // const animatedButtonScale = useRef(new Animated.Value(1)).current;
  
  // Create a map to store animation values for each item
  const animationValues = useRef(new Map()).current;
  
  // Get or create animation value for an item
  const getAnimationValue = (id: number) => {
    if (!animationValues.has(id)) {
      animationValues.set(id, new Animated.Value(1));
    }
    return animationValues.get(id);
  };
  
  const handleRemoveItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };
  
  const handleClearAll = () => {
    Alert.alert(
      "Clear Wishlist",
      "Are you sure you want to remove all items from your wishlist?",
      [
        { text: "Cancel", style: "cancel" },
        { 
          text: "Clear All", 
          onPress: () => setWishlistItems([]),
          style: "destructive" 
        }
      ]
    );
  };
  
  // Add to cart animation and handler
  const handleAddToCart = (id: number) => {
    // Get the animation value for this specific item
    const animatedValue = getAnimationValue(id);
    
    // Animate button press
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    // Here you would add the actual cart functionality
    console.log('Added to cart:', id);
    
    // Optional: Show feedback (could add a toast notification here)
  };
  
  const renderRightActions = (id: number) => {
    return (
      <TouchableOpacity 
        style={styles.deleteAction}
        onPress={() => handleRemoveItem(id)}
      >
        <Feather name="trash-2" size={24} color={theme.colors.gray} />
      </TouchableOpacity>
    );
  };
  
  const renderItem = ({ item }: { item: Product }) => (
    <Swipeable
      renderRightActions={() => renderRightActions(item.id)}
      friction={2}
      rightThreshold={40}
    >
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
          
          {/* Improved Add to Cart button with item-specific animation */}
          <Animated.View style={{ transform: [{ scale: getAnimationValue(item.id) }] }}>
            <TouchableOpacity 
              style={styles.moveToCartButton}
              onPress={() => handleAddToCart(item.id)}
              activeOpacity={0.8}
            >
              <Feather name="shopping-cart" size={14} color={theme.colors.white} style={styles.buttonIcon} />
              <Text style={styles.moveToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Swipeable>
  );

  return (
    <GestureHandlerRootView>
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        {wishlistItems.length > 0 && (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>My Wishlist</Text>
            <TouchableOpacity onPress={handleClearAll}>
              <Text style={styles.clearAllButton}>Clear All</Text>
            </TouchableOpacity>
          </View>
        )}
        
        {wishlistItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Feather name="heart" size={64} color={theme.colors.gray} />
            <Text style={styles.emptyStateText}>Your wishlist is empty</Text>
          </View>
        ) : (
          <FlatList
            data={wishlistItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

// Add to styles
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
    borderRadius: theme.borderRadius.lg, // Changed from md to lg to match ProductCard
    marginBottom: theme.spacing.md,
    padding: theme.spacing.sm,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
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
    justifyContent: 'space-between', // Changed to space-between for better vertical distribution
    paddingVertical: theme.spacing.xs, // Added vertical padding for consistent spacing
  },
  
  productName: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 16,
    marginBottom: theme.spacing.xs, // Consistent spacing
  },
  
  productBrand: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: theme.spacing.sm, // Increased spacing before price
  },
  
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md, // Added consistent spacing before button
  },
  
  moveToCartButton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm, // Increased vertical padding
    paddingHorizontal: theme.spacing.md, // Increased horizontal padding
    borderRadius: theme.borderRadius.round,
    marginTop: theme.spacing.xs,
    alignSelf: 'flex-start',
    flexDirection: 'row', // Added for icon + text layout
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 120, // Set minimum width for consistent button size
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2, // Added subtle shadow to make button stand out
  },
  
  moveToCartText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.sm, // Increased font size
    fontFamily: theme.fontFamily.semiBold, // Changed to semiBold for emphasis
  },
  
  buttonIcon: {
    marginRight: theme.spacing.xs, // Space between icon and text
  },
  originalPrice: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSizes.sm,
    color: theme.colors.gray,
    textDecorationLine: 'line-through',
    marginRight: theme.spacing.xs,
  },
  currentPrice: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSizes.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
  headerTitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: theme.fontSizes.lg,
  },
  clearAllButton: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSizes.sm,
  },
  deleteAction: {
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderTopRightRadius: theme.borderRadius.md,
    borderBottomRightRadius: theme.borderRadius.md,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyStateText: {
    fontFamily: theme.fontFamily.medium,
    fontSize: 16,
    color: theme.colors.gray,
    marginTop: theme.spacing.md,
  }
});
