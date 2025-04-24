import { View, StyleSheet, ScrollView } from "react-native";
import { Carousel } from "@/components/ui/Carousel";
import { SearchInput } from "@/components/ui/SearchInput";
import { Categories } from "@/components/ui/Categories";
import ProductGrid from "@/components/ui/ProductGrid";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import theme from "@/constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.content}>
            <SearchInput showFilter={false}/>
            {/* <Carousel /> */}
            <Categories />
            <ProductGrid title="Bese Sellers" />
            <ProductGrid title="Sale"/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  scrollView: {
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white,
    gap: theme.spacing.md,
    paddingBottom: 20,
  },
});
