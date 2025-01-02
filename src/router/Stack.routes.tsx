import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../types/router';
import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';
import { ProductDetails } from '../screens/ProductDetails';
import { Platform } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { theme } from '../theme';
import { tabHiddenRoutes } from './utils';


const { Screen, Navigator } = createNativeStackNavigator<propsNavigationStack>();

export function AppStack({ navigation, route }: any) {
  React.useLayoutEffect(() => {
    if (Platform.OS !== 'ios') {
        if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
            navigation.setOptions({ tabBarStyle: { display: 'none' } });
        } else {
            navigation.setOptions({
                tabBarStyle: {
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 55,
                    backgroundColor: theme.WHITE,
                    paddingTop: 5,
                    paddingBottom: 5
                }
            });
        }
    }
}, [navigation, route])
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name="Cart"
        component={Cart}
        options={{
          gestureEnabled: false,
        }}
      />
      <Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          gestureEnabled: false,
        }}
      />

    </Navigator>
  );
}