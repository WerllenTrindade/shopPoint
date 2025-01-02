import { View } from "react-native";

interface IconProps {
    icon: React.ReactElement;
}

export function ButtonIcon({ icon, ...rest }: IconProps) {
    return (
        <View {...rest}>{icon}</View>
    );
}
