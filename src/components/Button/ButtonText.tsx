import { Text } from "react-native";

interface ButtonTextProps {
    text: string;
    color?: string
}

const ButtonText = ({text, color = '#fff'}: ButtonTextProps) => <Text style={{color: color}}>{text}</Text>;

export { ButtonText }
