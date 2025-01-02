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

  const handleInsertProductCart = () => {
    const newProduct = {
      name: nameProduct,
      amount: Math.floor(Math.random() * 50) + 1,
      id: uuid.v4(),
    };
    add(newProduct);  

    setNameProduct("");
  };

  return (
    <View style={s.container}>
      <View style={{ width: "100%" }}>
        <Text>Nome do produto</Text>
        <TextInput
          onChangeText={setNameProduct}
          value={nameProduct}
          style={s.input}
        />
        <TouchableOpacity style={s.button} onPress={handleInsertProductCart}>
          <Text style={s.adicionar}>ADICIONAR</Text>
        </TouchableOpacity>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            gap: 10,
            paddingTop: 15
          }}

          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => remove(item.id)} style={{width: '100%',   borderColor: '#482',
                borderWidth: 1.3, paddingHorizontal: 10, padding: 10, borderRadius: 10 }}>
              <Text>Name: {item.name}</Text>
              <Text>Amount: {item.amount}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
