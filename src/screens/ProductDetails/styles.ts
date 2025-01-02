import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../theme";

const { height } = Dimensions.get('window');

export const s = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25
    },
    contain: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    img: {
        width: '100%',
        height: height / 3,
        objectFit: 'contain'
    },
    title: {
        fontSize: 25,
        color: theme.TITLE,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 20,
        color: theme.TEXT,
        fontWeight: '500'
    },
    quantity: {
        fontSize: 20,
        color: theme.TEXT_DARK,
        fontWeight: '500'
    }
})