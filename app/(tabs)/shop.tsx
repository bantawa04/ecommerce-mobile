import ProductGrid from "@/components/ui/ProductGrid";
import { SearchInput } from "@/components/ui/SearchInput";
import theme from "@/constants/theme";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Shop() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container} edges={['top']}>
          <ScrollView style={styles.scrollView}>
            <SearchInput />
            <ProductGrid showAll={false} />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
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