import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function FilterModal() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen 
        options={{ 
          title: 'Filter Products'
        }} 
      />
      <Text>Filter Modal</Text>
    </View>
  );
}