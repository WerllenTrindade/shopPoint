
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { GroupType } from "../../types/dto/groupType";
import { getProductAPI, useProducts } from "../../api/product/getProduct";
import { Alert } from "react-native";
import { mapError, ResponseError } from "../../utils/Erros";
import { QUERY_KEY_PRODUCT } from "../../constants/keyProduct";
import { useState } from "react";
import { useGroups } from "../../api/group/getGroup";

export const useHome = () => {
  const queryClient = useQueryClient();
  const [groupSelect, setGroupSelect] = useState(0)
  const { data: group = [], isLoading: isGroupLoading } = useGroups();
  const { data: product = [], isLoading: isProductLoading } = useProducts(groupSelect ?? group[0].id);



  const handleActiveGroup = async (id: number) => {
    const data = await getProductAPI(id);
    return data;
  };

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
  


  const selectGroup = async (group: GroupType) => {
    await activateGroup(group.id);

    setGroupSelect(group.id)
  };

  return {
    selectGroup,
    groupSelect,
    group,
    product,
    isGroupLoading,
     isProductLoading
  };
};
