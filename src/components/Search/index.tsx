import { TextInput, TextInputProps, View } from "react-native";
import { s } from "./styles";
import { SearchIcon } from "lucide-react-native";

interface SearchProps extends TextInputProps {}

export function Search({...rest}: SearchProps){
    return (
        <View style={s.container}>
            <View style={s.contain}>
                <TextInput {...rest} placeholder="Search" style={s.input}/>
                <SearchIcon style={s.icon}/>
            </View>
        </View>
    )
}