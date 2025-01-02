import { NativeStackNavigationProp  } from '@react-navigation/native-stack';

export type propsNavigationStack = {
  Home: undefined | any;
  Cart: undefined | any;
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;
