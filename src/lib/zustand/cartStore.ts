import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import { purchase } from './cartActions';
import { productType } from '../../types/dto/productType';

type StateProps = {
  products: productType[];
  productDetails: productType | null;
  setProductDetails: (product: productType) => void;
  add: (product: productType) => void;
  remove: (id: string) => void;
};

export const useCartStore = create(
  persist<StateProps>(
    set => ({
      products: [],
      productDetails: null,
      setProductDetails: (item: productType) =>
        set(_ => ({
          productDetails: item,
        })),
      add: (product: productType) =>
        set(state => ({
          products: [...state.products, product],
        })),
      remove: (hashId: string) =>
        set(state => ({
          products: state.products.filter(x => x.hash_id != hashId),
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
