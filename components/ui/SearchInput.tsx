import theme from "@/constants/theme";
import { AntDesign, Feather } from "@expo/vector-icons";
import { View, StyleSheet, TextInput, Text } from "react-native"
import { Button } from "./Button";
import { Link } from "expo-router";
import { useFilterStore } from "@/store/useFilterStore";
import { Pill } from "./Pill";

interface SearchInputProps {
    showFilter?: boolean;
}
export const SearchInput: React.FC<SearchInputProps> = ({ showFilter = true }) => {
    const { selectedCategories, toggleCategory } = useFilterStore();
    return <>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={18} color="#939393" style={styles.icon} />
                <TextInput
                    placeholder="Search here..."
                    style={styles.input}
                    placeholderTextColor="#C8C8CB"
                />
            </View>
            {showFilter &&
                <Link href="/modal/filter" push asChild>
                    <Button style={styles.filterButton}>
                        <AntDesign name="filter" size={18} color={theme.colors.dark} />
                    </Button>
                </Link>
            }
        </View>
        {showFilter && selectedCategories.length > 0 && (
            <>
                <Text style={styles.filterLabel}>Applied Filters</Text>
                <View style={styles.categoriesContainer}>
                    {selectedCategories.map((category) => (
                        <Pill
                            key={category}
                            label={category}
                            showCloseIcon={category !== 'All'}
                            onPress={() => toggleCategory(category)}
                            style={styles.categoryPill}
                        />
                    ))}
                </View>
            </>
        )}
    </>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: theme.spacing.md,
        marginTop: theme.spacing.md,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        borderWidth: 1,
        borderRadius: theme.borderRadius.round,
        borderColor: "transparent",
        backgroundColor: theme.colors.background,
        paddingHorizontal: theme.spacing.sm,
        marginRight: theme.spacing.sm,
    },
    icon: {
        marginRight: theme.spacing.xs,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: theme.fontSizes.md,
        color: theme.colors.dark,
    },
    filterButton: {
        width: 45,
        height: 45,
        borderRadius: theme.borderRadius.round,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedCategory: {
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.md,
        borderRadius: theme.borderRadius.round,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.primaryLight,
        margin: theme.spacing.xs,
        height: 24,
        minWidth: 60,
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.colors.dark,
        fontSize: theme.fontSizes.sm,
        fontFamily: theme.fontFamily.medium,
    },
    categoriesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginHorizontal: theme.spacing.md,
        marginBottom: theme.spacing.xs, // Add a smaller bottom margin
    },
    categoryPill: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: theme.spacing.xs,
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.xs,
        borderRadius: theme.borderRadius.round,
        backgroundColor: theme.colors.background,
        borderWidth: 1,
        borderColor: theme.colors.primaryLight,
        margin: theme.spacing.xs,
        height: 28, // Override the default height for search input pills
    },
    categoryText: {
        color: theme.colors.dark,
        fontSize: theme.fontSizes.sm,
        fontFamily: theme.fontFamily.medium,
        marginRight: theme.spacing.xs,
    },
    filterLabel: {
        fontFamily: theme.fontFamily.medium,
        fontSize: theme.fontSizes.sm,
        color: theme.colors.dark,
        marginHorizontal: theme.spacing.lg,
        marginTop: theme.spacing.xs, // Reduce from md to xs
        marginBottom: theme.spacing.xs, // Add a small bottom margin
    },
});