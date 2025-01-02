import { StyleSheet, Dimensions } from "react-native";
import { theme } from "../../theme";


const { height } = Dimensions.get('window');


export const s = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#f5f5f5',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: '100%'
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        paddingTop: 10
    },
    estoque: {
        fontSize: 14,
        color: '#777',
        paddingBottom: 5
    },
    img: {
        width: '100%',
        height: height / 8,
        objectFit: 'contain'
    },
    footer: {
        alignItems: 'flex-end', 
        flexDirection: 'row',
        justifyContent: 'space-between', 
        width: '100%',

    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    price_old: {
        fontSize: 12,
        fontWeight: '500',
        color: theme.ATTENTION,
        textDecorationLine: 'line-through'
    },
    price_new: {
        fontSize: 16,
        fontWeight: 'bold',
        color: theme.OPEN,
    }
});