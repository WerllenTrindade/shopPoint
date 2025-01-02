import { productType } from './../../types/dto/productType';

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GroupType } from "../../types/dto/groupType";
import { getProductAPI, getSearchProductAPI, useProducts } from "../../api/product/getProduct";
import { Alert, TextInput } from "react-native";
import { mapError, ResponseError } from "../../utils/Erros";
import { QUERY_KEY_PRODUCT } from "../../constants/keyProduct";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGroups } from "../../api/group/getGroup";
import { useCartStore } from "../../lib/zustand/cartStore";
import { useNavigation } from "@react-navigation/native";
import { propsNavigationStack, propsStack } from "../../types/router";

export const useHome = () => {
  const { navigate } = useNavigation<propsStack>();
  const queryClient = useQueryClient();
  const { setProductDetails } = useCartStore();
  const [groupSelect, setGroupSelect] = useState(0);

  const { data: group = [], isLoading: isGroupLoading } = useGroups();
  const { data: product = [], isLoading: isProductLoading } = useProducts(groupSelect == 0 ? group[0]?.id : groupSelect);

  const { mutateAsync: activateGroup } = useMutation({
    mutationFn: getProductAPI,
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY_PRODUCT], data);
    },
    onError: (error) => {
      const errorMessage = mapError(error);
      Alert.alert(`${errorMessage}`)
    },
  });

  const selectGroup = useCallback(async (group: GroupType) => {
    await activateGroup(group.id);

    setGroupSelect(group.id)
  },[groupSelect])

  const handleSelectProduct = (item: productType) => {
    setProductDetails(item);
    navigate('ProductDetails')
  }

  return {
    selectGroup,
    groupSelect,
    group,
    product,
    isGroupLoading,
    isProductLoading,
    handleSelectProduct
  };
};
