import { Tabs } from 'expo-router';
import React from 'react';
import { TabBar } from "@/components/ui/TabBar";
import { BackButton } from '@/components/ui/BackButton';
import { HeaderRightActions } from '@/components/ui/HeaderRightActios';
export default function TabLayout() {
  
  return (
    <Tabs
      tabBar={props => <TabBar {...props}/>}
      screenOptions={{
        headerStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '500',
          textAlign: 'center',
        },
        headerTitleAlign: 'center', // Center align the header title
        headerShadowVisible: false,
        headerLeft: () => (
          <BackButton />
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

