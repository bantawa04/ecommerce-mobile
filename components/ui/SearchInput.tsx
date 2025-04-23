import theme from "@/constants/theme";
import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native"

export const SearchInput = () => {
    return (
        <View style={styles.inputContainer}>
            <Feather name="search" size={18} color="#939393" style={styles.icon} />
            <TextInput
                placeholder="Search here..."
                style={styles.input}
                placeholderTextColor="#C8C8CB"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        marginHorizontal: 15,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: theme.borderRadius.round,
        borderColor: "transparent",
        backgroundColor: theme.colors.background,
        paddingHorizontal: 10,
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 16,
        color: '#333',
    },
});