import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theme";


const { height } = Dimensions.get('window');


export const s = StyleSheet.create({
    card: {
        marginVertical: 10,
        paddingHorizontal: 15,
    },
    nome: {
        fontSize: 16,
        fontWeight: '500',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
});