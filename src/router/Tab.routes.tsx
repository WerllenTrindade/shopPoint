import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Platform } from "react-native";
import { theme } from "../theme";
import { Home } from "../screens/Home";
import {
  House,
  PackageOpen,
  Settings as SettingsIcon,
  ShoppingCart,
} from "lucide-react-native";
import { Cart } from "../screens/Cart";
import { Settings } from "../screens/Settings";
import { Orders } from "../screens/Orders";
import { AppStack } from "./Stack.routes";
import { platformSpecificValue } from "../utils";
import { useCartStore } from "../lib/zustand/cartStore";

const Tab = createBottomTabNavigator();

export function AppTab() {
  const { products } = useCartStore();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true, //Ocultar navbar quando teclado for ativado
        tabBarActiveTintColor: theme.PRIMARY, //cor onde esta clicado
        tabBarInactiveTintColor: theme.PRIMARY, //cor onde não esta clica
        tabBarStyle: {
          backgroundColor: theme.WHITE,
          height: platformSpecificValue({ android: 50, ios: 55 }),
          paddingTop: platformSpecificValue({ android: 6, ios: 3 }),
          paddingBottom: platformSpecificValue({ android: 6, ios: 18 }),
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={AppStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }: any) => {
            if (focused) {
              return <House size={25} color={theme.PRIMARY} />;
            }
            return <House size={25} color={theme.TITLE} />;
          },
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={s.textActive}>Inicio</Text>
              ) : (
                <Text style={s.text}>Inicio</Text>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarBadge: products?.length == 0 ? undefined : products?.length,
          tabBarBadgeStyle: {
            top: -5,
            fontSize: 12,
          },
          headerShown: false,
          tabBarIcon: ({ focused, size, color }: any) => {
            if (focused) {
              return <ShoppingCart size={25} color={theme.PRIMARY} />;
            }
            return <ShoppingCart size={25} color={theme.TITLE} />;
          },
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={s.textActive}>Carrinho</Text>
              ) : (
                <Text style={s.text}>Carrinho</Text>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Pedidos"
        component={Orders}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }: any) => {
            if (focused) {
              return <PackageOpen size={25} color={theme.PRIMARY} />;
            }
            return <PackageOpen size={25} color={theme.TITLE} />;
          },
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={s.textActive}>Pedidos</Text>
              ) : (
                <Text style={s.text}>Pedidos</Text>
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Configurações"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <SettingsIcon
              size={25}
              color={focused ? theme.PRIMARY : theme.TITLE}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <View>
              {focused ? (
                <Text style={s.textActive}>Configurações</Text>
              ) : (
                <Text style={s.text}>Configurações</Text>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const s = StyleSheet.create({
  textActive: {
    color: theme.PRIMARY,
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    color: theme.TITLE,
    fontSize: 12,
    fontWeight: "bold",
  },
});
