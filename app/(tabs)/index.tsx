import { TextInput, View, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'; // Import Feather icons

export default function HomeScreen() {
  return (    
    <View style={{ flex: 1, backgroundColor: 'white'}}> 
      
      <View style={styles.inputContainer}>
        <Feather name="search" size={18} color="#939393" style={styles.icon} /> 
        <TextInput 
          placeholder="Search here..." 
          style={styles.input}
          placeholderTextColor="#C8C8CB" 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row', // Arrange icon and input horizontally
    alignItems: 'center', // Center items vertically
    height: 45, // Increased height slightly for better spacing
    marginHorizontal: 15, // Adjusted margin
    marginTop: 20, // Added margin top
    borderWidth: 1,
    borderRadius: 10, // Slightly more rounded corners
    borderColor: "#E0E0E0", // Slightly darker border for visibility
    backgroundColor: '#FFFFFF', // Light grey background for the input area
    paddingHorizontal: 10, // Padding inside the container
  },
  icon: {
    marginRight: 8, // Space between icon and text input
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16, 
    color: '#333',

  }
});