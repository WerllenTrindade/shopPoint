import { Text } from "react-native";

interface ButtonTextProps {
    text: string;
}

const ButtonText = ({text}: ButtonTextProps) => <Text>{text}</Text>;

export { ButtonText }
