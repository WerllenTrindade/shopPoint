import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { propsNavigationStack } from '../types/router';
import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';


const { Screen, Navigator } = createNativeStackNavigator<propsNavigationStack>();

export function RouterInitial() {
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
    </Navigator>
  );
}
