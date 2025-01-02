import { Image, Text, TouchableOpacity, View } from "react-native";
import { productType } from "../../types/dto/productType";
import { useCartStore } from "../../lib/zustand/cartStore";
import { imgProduct } from "../../utils";
import { s } from "./styles";
import { formatNumber } from "../../utils/formatNumber";
import { Heart, Minus, Plus } from "lucide-react-native";
import { theme } from "../../theme";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

export function ProductDetails() {
  const [heart, setHeart] = useState(false);
  const { productDetails: data } = useCartStore();

  const handleFavorit = () => {
    setHeart((stv) => !stv);
  };

  return (
    <View style={s.container}>
      <Image style={s.img} source={imgProduct(data?.id ?? 0)} />
      <View style={s.contain}>
        <View>
          <Text style={s.title}>{data?.name}</Text>
          <Text style={s.price}>{formatNumber(data?.price ?? 0)}</Text>
        </View>
        <View>
          <Button.Root
            onPress={handleFavorit}
            style={
              heart
                ? { backgroundColor: theme.ATTENTION_LIGHT }
                : { backgroundColor: theme.TEXT }
            }
          >
            <Button.Icon
              icon={
                <Heart color={heart ? theme.ATTENTION_LIGHT : theme.WHITE} />
              }
            />
          </Button.Root>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
        <Button.Root style={{ backgroundColor: theme.TEXT }}>
          <Button.Icon icon={<Minus />} />
        </Button.Root>
        <Text style={s.quantity}>12</Text>
        <Button.Root style={{ backgroundColor: theme.TEXT }}>
          <Button.Icon icon={<Plus />} />
        </Button.Root>
      </View>

      <View>
        <Button.Root style={{ paddingVertical: 15, flexDirection: 'row', gap: 15, alignItems: 'center', backgroundColor: theme.PRIMARY }}>
          <Button.Text text="SELECIONAR PRODUTO" />
        </Button.Root>
      </View>
    </View>
  );
}
