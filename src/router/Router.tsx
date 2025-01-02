import React from "react";
import { AppStack } from "./Stack.routes";
import { NavigationContainer } from "@react-navigation/native";
import { AppTab } from "./Tab.routes";

export function Router() {
  return (
      <AppTab />
  );
}
