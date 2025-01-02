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

export function useProducts(group: number) {
  return useQuery({
    queryKey: [QUERY_KEY_PRODUCT, group],
    queryFn: () => getProductAPI(group),
    enabled: !!group,
  });
}



