import { View, StyleSheet, LayoutChangeEvent } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather, Octicons } from '@expo/vector-icons';
import { ReactNode, useState, useEffect, useRef } from 'react';
import theme from '@/constants/theme';
import { TabBarButton } from './TabBarButton';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring, 
  withSequence,
} from 'react-native-reanimated';

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    
    type IconName = 'index' | 'shop' | 'wishlist' | 'profile' | 'brands';
    const icons: Record<IconName, (props: { color: string }) => ReactNode> = {
        'index': ({ color }) => <AntDesign name="home" size={18} color={color} />,
        'shop': ({ color }) => <Feather name="shopping-bag" size={18} color={color} />,
        'wishlist': ({ color }) => <Feather name="heart" size={18} color={color} />,
        'profile': ({ color }) => <AntDesign name="user" size={18} color={color} />,
        'brands': ({ color }) => <Octicons name="verified" size={18} color={color} />,
    };

    // Track dimensions for positioning
    const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
    const buttonWidth = dimensions.width / state.routes.length;
    
    // Animation values
    const tabPositionX = useSharedValue(0);
    const rotateValue = useSharedValue(0);
    const scaleValue = useSharedValue(1);
    
    // Initialize animation values
    useEffect(() => {
        // Set initial position without animation
        tabPositionX.value = state.index * buttonWidth;
    }, []);

    // Handle tab bar layout changes
    const onTabBarLayout = (event: LayoutChangeEvent) => {
        setDimensions({
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width,
        });
        
        // Update position when layout changes
        tabPositionX.value = state.index * buttonWidth;
    };

    // Update animations when tab changes
    useEffect(() => {
        // Calculate the target position
        const targetPosition = state.index * buttonWidth;
        
        // Animate position with spring for bouncy effect
        tabPositionX.value = withSpring(targetPosition, {
            damping: 15,
            stiffness: 150,
            mass: 1,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
        });
        
        // Add swing animation
        rotateValue.value = withSequence(
            withSpring(-0.1, { damping: 10, stiffness: 200 }),
            withSpring(0.1, { damping: 10, stiffness: 200 }),
            withSpring(0, { damping: 10, stiffness: 200 })
        );
        
        // Add scale animation
        scaleValue.value = withSequence(
            withSpring(0.9, { damping: 10, stiffness: 200 }),
            withSpring(1.1, { damping: 10, stiffness: 200 }),
            withSpring(1, { damping: 10, stiffness: 200 })
        );
    }, [state.index, buttonWidth]);

    // Animated styles for the indicator
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: tabPositionX.value },
                { rotate: `${rotateValue.value}rad` },
                { scale: scaleValue.value }
            ],
            zIndex: 1, // Ensure the circle is above other elements
        };
    });

    return (
        <View style={styles.tabBar} onLayout={onTabBarLayout}>
            {/* Tab buttons */}
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
            
            {/* Animated pink circle indicator - moved after tab buttons */}
            <Animated.View
                style={[
                    styles.tabIndicator,
                    animatedStyle,
                    {
                        width: 40,
                        height: 40,
                        left: (buttonWidth - 40) / 2, // Center the circle in the tab
                    }
                ]}
            />
        </View>
    );
};

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
    },
    tabIndicator: {
        position: 'absolute',
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.round,
        top: 15,
    }
});