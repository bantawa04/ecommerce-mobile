import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { ReactNode } from 'react';
import theme from '@/constants/theme';
import { TabBarButton } from './TabBarButton';

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {

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
                    <TabBarButton
                        key={route.name}
                        routeName={route}
                        isFocused={isFocused}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        label={label}
                        icon={route.name in icons ? icons[route.name as IconName] : null}
                        color={isFocused ? theme.colors.white : theme.colors.gray}
                    />
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
        borderRadius: theme.borderRadius.round,
        ...theme.shadows.lg
    }
});