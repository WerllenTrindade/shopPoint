import { NativeStackNavigationProp  } from '@react-navigation/native-stack';
import { productType } from './dto/productType';

export type propsNavigationStack = {
  Home: undefined | any;
  Cart: undefined | any;
  ProductDetails: undefined | any;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
