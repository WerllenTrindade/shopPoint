import { Text, View } from "react-native";

interface BadgeProps {
    quantity: number;
}

export function Badge({quantity}: BadgeProps){
    return (
        <View style={{
            backgroundColor: '#67bb36', 
            borderRadius: 100, 
            height: 23,
            width: 23, 
            position: 'absolute',
            top: -12,
            right: -12,
            zIndex: 1,
            justifyContent: 'center',
            }}>
        <Text style={{textAlign: 'center', color: '#FFF'}}>{quantity}</Text>
      </View>
    )
}