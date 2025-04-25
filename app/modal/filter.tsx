import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import theme from '@/constants/theme';
import { useFilterStore } from '@/store/useFilterStore';
import { Pill } from '@/components/ui/Pill';

// Change from named export to default export
export default function FilterModal() {
  const { toggleCategory, isSelected } = useFilterStore();
  
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
          <Pill
            key={category}
            label={category}
            active={isSelected(category)}
            onPress={() => toggleCategory(category)}
          />
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

});