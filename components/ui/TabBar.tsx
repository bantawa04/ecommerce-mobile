import { View, StyleSheet } from 'react-native';
import { useLinkBuilder } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import theme from '@/constants/theme';

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { buildHref } = useLinkBuilder();
    type IconName = 'index' | 'shop' | 'wishlist' | 'profile' | 'brands';
    const icons: Record<IconName, (props: { color: string }) => ReactNode> = {
        'index': ({ color }) => <AntDesign name="home" size={18} color={color} />,
        'shop': ({ color }) => <Feather name="shopping-bag" size={18} color={color} />,
        'wishlist': ({ color }) => <Feather name="heart" size={18} color={color} />,
        'profile': ({ color }) => <AntDesign name="user" size={18} color={color} />,
        'brands': ({ color }) => <Octicons name="verified" size={18} color={color} />,
    };

    return (
        <View style={styles.tabBar}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={route.name}
                        style={styles.tabBarItem}
                        android_ripple={{ color: 'transparent' }}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <View style={[
                            styles.iconContainer,
                            isFocused && styles.activeIconContainer
                        ]}>
                            {
                                (route.name in icons)
                                    ? icons[route.name as IconName]({
                                        color: isFocused ? theme.colors.white : theme.colors.gray
                                    })
                                    : null
                            }
                        </View>
                        <Text style={[
                            styles.tabText,
                            isFocused && styles.activeTabText
                        ]}>
                            {label}
                        </Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        bottom: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        marginHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.md,
        borderRadius: theme.borderRadius.xl,
        ...theme.shadows.lg
    },
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