import { useQuery } from '@tanstack/react-query';
import { api } from '../../server/api';

export async function getGroupAPI() {
  try {
    console.log('veuo aqui')
    const { data } = await api.get('groups');
      console.log(data)
    return data;
  } catch (error) {
    console.log('Failed to fetch products:', error);
    return []
  }
}


export function useGroups() {
  return useQuery({
    queryKey: ['groups'],
    queryFn: getGroupAPI,
  });
}
