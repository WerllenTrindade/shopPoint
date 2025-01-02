import React from 'react'
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { useCartStore } from "../../lib/zustand/cartStore";
import { s } from "./styles";
import { useState } from "react";

export function Cart() {
  const [nameProduct, setNameProduct] = useState("");
  const { products, add, remove } = useCartStore();


  return (
    <View style={s.container}>
      <View style={{ width: "100%" }}>
      </View>
    </View>
  );
}
