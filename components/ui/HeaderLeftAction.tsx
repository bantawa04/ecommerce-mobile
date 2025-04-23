import { AntDesign } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import theme from "@/constants/theme";

export const HeaderLeftAction = () => {
    const router = useRouter();
    const pathname = usePathname();
    
    if (pathname === "/" || pathname === "/index") {
        // Return avatar, greeting and user's name for home page
        return (
            <View style={styles.homeHeaderContainer}>
                <Image 
                    source={{ uri: "https://randomuser.me/api/portraits/women/32.jpg" }} 
                    style={styles.avatar} 
                />
                <View style={styles.greetingContainer}>
                    <Text style={styles.greeting}>Good morning</Text>
                    <Text style={styles.userName}>John Doe</Text>
                </View>
            </View>
        );
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
    },
    homeHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: theme.spacing.md,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: theme.borderRadius.round,
        marginRight: theme.spacing.sm,
    },
    greetingContainer: {
        flexDirection: 'column',
    },
    greeting: {
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray,
        fontFamily: theme.fontFamily.medium,
    },
    userName: {
        fontSize: theme.fontSizes.md,
        color: theme.colors.dark,
        fontFamily: theme.fontFamily.semiBold,
    }
});