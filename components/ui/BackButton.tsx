import { AntDesign, Feather } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";

export const BackButton = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    if (pathname === "/" || pathname === "/index") {
        return null;
    }
    
    return (
        <View style={styles.headerIcons}>
            <TouchableOpacity
                style={styles.iconButton}
                onPress={() => router.back()}
            >
               <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

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