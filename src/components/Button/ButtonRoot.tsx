import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function ButtonRoot({ children, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={[s.containRoot, style]} {...rest}>
      {children}
    </TouchableOpacity>
  );
}
