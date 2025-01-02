import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgBackground: {
        backgroundColor: theme.PRIMARY,
        borderBottomLeftRadius: '5%',
        borderBottomRightRadius: '5%',
    },
    contentFlat: {
        paddingBottom: '40%',
    },
    columnWrapper: {
        justifyContent: 'space-between',
    },
})