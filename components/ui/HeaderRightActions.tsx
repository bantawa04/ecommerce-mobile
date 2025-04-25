import { Feather } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import theme from "@/constants/theme";
import { PlatformPressable } from '@react-navigation/elements';

export const HeaderRightActions = () => {
    const cartItemCount = 3;

    return (
        <View style={styles.headerIcons}>
            <PlatformPressable
                style={styles.iconButton}
                onPress={() => console.log('Cart pressed')}
            >
                <Feather name="shopping-cart" size={18} color={theme.colors.dark} />
                {cartItemCount > 0 && (
                    <View style={styles.cartBadge}>
                        <Text style={styles.badgeText}>{cartItemCount}</Text>
                    </View>
                )}
            </PlatformPressable>
            <PlatformPressable
                style={styles.iconButton}
                onPress={() => console.log('Notifications pressed')}
            >
                <Feather name="bell" size={18} color={theme.colors.dark} />
                <View style={styles.notificationDot} />
            </PlatformPressable>
        </View>
    );
}

const styles = StyleSheet.create({
    headerIcons: {
        flexDirection: 'row',
        marginRight: theme.spacing.md,
        gap: theme.spacing.sm,
    },
    iconButton: {
        padding: theme.spacing.sm,
        marginLeft: theme.spacing.xs,
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.round,
        width: 36,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    cartBadge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.round,
        minWidth: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 2,
    },
    badgeText: {
        color: theme.colors.white,
        fontSize: 10,
        fontWeight: 'bold',
    },
    notificationDot: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 8,
        height: 8,
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.round,
    }
});