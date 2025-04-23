import { View, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { ReactNode } from 'react';
export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();
    type IconName = 'index' | 'shop' | 'wishlist' | 'profile';
    const icons: Record<IconName, (props: { color: string }) => ReactNode> = {
        'index': ({ color }) => <Feather name="home" size={16} color={color} />,
        'shop': ({ color }) => <Feather name="shopping-bag" size={16} color={color} />,
        'wishlist': ({ color }) => <Feather name="heart" size={16} color={color} />,
        'profile': ({ color }) => <AntDesign name="user" size={16} color={color} />,
    };
    const primaryColor = "#0891b2";
    const greyColor = "#737373";
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
                        {
                            (route.name in icons)
                                ? icons[route.name as IconName]({
                                    color: isFocused ? primaryColor : greyColor
                                })
                                : null
                        }
                        <Text style={{
                            color: isFocused ? primaryColor : colors.text,
                            fontSize: 11
                        }}>
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
        backgroundColor: 'white',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 25,
        borderCurve: 'continuous',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        shadowOpacity: 0.1
    },
    tabBarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,        
    }
});