import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";

export const HeaderRightActions = () => {
    return (
        <View style={styles.headerIcons}>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={() => console.log('Notifications pressed')}
            >
                <Feather name="bell" size={18} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={() => console.log('Cart pressed')}
            >
                <Feather name="shopping-cart" size={18} color="#333" />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: 'row',
        marginRight: 10,
    },
    iconButton: {
        padding: 8,
        marginLeft: 5,
    }
});
