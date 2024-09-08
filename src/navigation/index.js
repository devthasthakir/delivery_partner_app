import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens Import
import MyDrawer from "./drawer-navigation";
import { MyTabs } from "./bottom-navigation";
import { PickupOrderScreen, ReachDropScreen, ReachPickupScreen,DropOrderScreen } from "../screens";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Drawer" component={MyTabs} />
      <Stack.Screen
        name="PickUpOrder"
        component={PickupOrderScreen}
        options={{
          headerShown: true,
          headerTitle: "Pick order",
        }}
      />
      <Stack.Screen
        name="ReachPickUp"
        component={ReachPickupScreen}
        options={{
          headerShown: true,
          headerTitle: "Reach Pickup",
        }}
      />
      <Stack.Screen
        name="ReachDrop"
        component={ReachDropScreen}
        options={{
          headerShown: true,
          headerTitle: "Reach Drop",
        }}
      />
      <Stack.Screen
        name="DropOrder"
        component={DropOrderScreen}
        options={{
          headerShown: true,
          headerTitle: "Drop Order",
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
