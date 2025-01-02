import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {

        alignItems: 'center', 
        justifyContent: 'center', 

        paddingHorizontal: 15
    },
    input: {
        height: 45,
        borderColor: '#482',
        borderWidth: 1.3,
        width: '100%',
        borderRadius: 8,
        paddingLeft: 15
    },
    button:{
        backgroundColor: '#482',
        width: '100%',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 25
    },
    adicionar:{
    color: '#fff'
    }
})