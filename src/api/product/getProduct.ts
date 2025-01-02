import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '../../server/api';
import { QUERY_KEY_PRODUCT } from '../../constants/keyProduct';

export async function getProductAPI(group: number) {
  try {
    const { data } = await api.get(`products?group_id=${group}`);
    return data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}


export async function getSearchProductAPI(name: string) {
  try {
    console.log(name)
    if(!name){
      return;
    }

    const { data } = await api.get(`products?name_like=${name}`);
    
    const filteredArr = data.filter((item: any) => item.name.toLowerCase().includes(name?.toLowerCase()));

    console.log(filteredArr)
    return filteredArr;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    throw error;
  }
}

export function useProducts(group: number) {
  return useQuery({
    queryKey: [QUERY_KEY_PRODUCT, group],
    queryFn: () => getProductAPI(group),
    enabled: !!group,
  });
}
