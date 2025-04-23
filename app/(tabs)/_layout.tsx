import { Tabs } from 'expo-router';
import React from 'react';
import {TabBar} from "@/components/ui/TabBar";

export default function TabLayout() {

  return (
    <Tabs
      tabBar={props => <TabBar {...props}/>}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',          
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
