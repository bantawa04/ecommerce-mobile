import { Tabs } from 'expo-router';
import React from 'react';
import { TabBar } from "@/components/ui/TabBar";
import { HeaderLeftAction } from '@/components/ui/HeaderLeftAction';
import { HeaderRightActions } from '@/components/ui/HeaderRightActions';
import theme from '@/constants/theme';
export default function TabLayout() {
  
  return (
    <Tabs
      tabBar={props => <TabBar {...props}/>}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: theme.fontSizes.md,
          fontFamily:theme.fontFamily.medium,
          textAlign: 'center',
        },
        headerTitleAlign: 'center', // Center align the header title
        headerShadowVisible: false,
        headerLeft: () => (
          <HeaderLeftAction />
        ),
        headerRight: () => (
          <HeaderRightActions/>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',      
          headerTitle:""    
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',          
        }}
      />
      <Tabs.Screen
        name="brands"
        options={{
          title: 'Brand',          
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}

