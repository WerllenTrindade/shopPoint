import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import { purchase } from './cartActions';

export interface ProductProps {
  id: number;
  nome: string;
  estoque: number;
  valor: number;
  valorPromocao: number;
  categoria: string;
  descricao: string;
  marca: string;
  peso: string;
  hashId?: string;
  dimensoes: string;
  dataCadastro: string;
}

type StateProps = {
  products: ProductProps[];
  add: (product: ProductProps) => void;
  remove: (id: string) => void;
};

export const useCartStore = create(
  persist<StateProps>(
    set => ({
      products: [],
      add: (product: ProductProps) =>
        set(state => ({
          products: [...state.products, product],
        })),
      remove: (hashId: string) =>
        set(state => ({
          products: state.products.filter(x => x.hashId != hashId),
        })),
      completePurchase: () => 
        set((state) => ({

        }))
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
