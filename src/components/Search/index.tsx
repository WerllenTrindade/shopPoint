import React, { forwardRef } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { s } from "./styles";
import { SearchIcon } from "lucide-react-native";

const Search = forwardRef<TextInput, SearchProps>(({ ...rest }, ref) => {
  return (
    <View style={s.container}>
      <View style={s.contain}>
        <TextInput {...rest} placeholder="Search" style={s.input} ref={ref} />
        <SearchIcon style={s.icon} />
      </View>
    </View>
  );
});

interface SearchProps extends TextInputProps {}

export { Search };
