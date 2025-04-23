import React, { ReactNode } from "react";
import { Text, PlatformPressable } from '@react-navigation/elements';
import { View, StyleSheet, Animated } from "react-native";
import theme from "@/constants/theme";
import { AntDesign, Feather, Octicons } from "@expo/vector-icons";

interface TabBarButtonProps {
    routeName: any;
    isFocused: boolean;
    onPress: () => void;
    onLongPress: () => void;
    label: string;
    icon: ((props: { color: string }) => ReactNode) | null;
    color: string;
}

export const TabBarButton = ({ 
    routeName, 
    isFocused, 
    onPress, 
    onLongPress, 
    label, 
    icon, 
    color 
}: TabBarButtonProps) => {
    return (
        <PlatformPressable
            style={styles.tabBarItem}
            android_ripple={{ color: 'transparent' }}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <View style={[
                styles.iconContainer,
                isFocused && styles.activeIconContainer
            ]}>
                {icon && icon({ color })}
            </View>
            <Text style={[
                styles.tabText,
                isFocused && styles.activeTabText
            ]}>
                {label}
            </Text>
        </PlatformPressable>
    );
}

const styles = StyleSheet.create({
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing.xs,
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: theme.borderRadius.round,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeIconContainer: {
        backgroundColor: theme.colors.primary,
    },
    tabText: {
        fontSize: theme.fontSizes.xs,
        color: theme.colors.gray,
        fontFamily: theme.fontFamily.medium,
    },
    activeTabText: {
        color: theme.colors.dark,
        fontFamily: theme.fontFamily.semiBold,
    }
});