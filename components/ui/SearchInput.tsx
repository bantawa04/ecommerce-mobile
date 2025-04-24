import theme from "@/constants/theme";
import { AntDesign, Feather } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native"
import { Button } from "./Button";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
export const SearchInput = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Feather name="search" size={18} color="#939393" style={styles.icon} />
                <TextInput
                    placeholder="Search here..."
                    style={styles.input}
                    placeholderTextColor="#C8C8CB"
                />
            </View>
            <Link href="/modal/filter" push asChild>
                <Button style={styles.filterButton}>
                    <AntDesign name="filter" size={18} color={theme.colors.dark} />
                </Button>
            </Link>

        </View>
    )
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
    }
});