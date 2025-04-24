import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import theme from '@/constants/theme';
import { useFilterStore } from '@/store/useFilterStore';

// Change from named export to default export
export default function FilterModal() {
  const { selectedCategory, setSelectedCategory } = useFilterStore();
  
  const categories = [
    'All', 'Face', 'Body', 'Hair', 'Lips', 'Eyes', 
    'Nails', 'Skincare', 'Makeup', 'Fragrance', 'Tools', 
    'Sunscreen', 'Moisturizer', 'Cleanser', 'Serum', 'Mask',
    'Toner', 'Exfoliator', 'Shampoo', 'Conditioner'
  ];

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: 'Filter Products',
          headerTitleStyle: {
            fontFamily: theme.fontFamily.semiBold,
          }
        }} 
      />
      <Text style={styles.heading}>Category</Text>
      <View style={styles.pillsContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.pill,
              selectedCategory === category && styles.pillActive
            ]}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.pillText,
                selectedCategory === category && styles.pillTextActive
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: theme.spacing.lg,
  },
  heading: {
    ...theme.typography.h2,
    textAlign: 'left',
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.sm,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  pill: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    borderRadius: theme.borderRadius.round,
    backgroundColor: theme.colors.background,
    borderWidth: 1,
    borderColor: theme.colors.primaryLight,
    margin: theme.spacing.xs,
    height: 32, 
    minWidth: 60, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillActive: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  pillText: {
    color: theme.colors.gray,
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.fontSizes.sm,
  },
  pillTextActive: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
  },
});