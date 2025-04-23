import { View, StyleSheet } from "react-native";
import { Carousel } from "@/components/ui/Carousel";
import { SearchInput } from "@/components/ui/SearchInput";
import { Categories } from "@/components/ui/Categories";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', gap: 10}}>
      <SearchInput />
      <View/>
      {/* <Carousel /> */}
      <Categories  />
    </View>
  );
}
