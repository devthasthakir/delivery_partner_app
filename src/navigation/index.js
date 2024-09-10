import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens Import
import { MyTabs } from "./bottom-navigation";
import {
  PickupOrderScreen,
  ReachDropScreen,
  ReachPickupScreen,
  DropOrderScreen,
  LoginScreen,
  ForgetPasswordScreen,
  OTPVerificationScreen,
  NotificationScreen,
  EditProfileScreen,
  ChangePasswordScreen,
  ContactSupportScreen,
  TermsConditionScreen,
} from "../screens";

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
        name="ContactSupport"
        component={ContactSupportScreen}
        options={{
          headerShown: true,
          headerTitle: "Contact Support",
        }}
      />
      <Stack.Screen
        name="TermsCondition"
        component={TermsConditionScreen}
        options={{
          headerShown: true,
          headerTitle: "Terms & Conditions",
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: "Notifications",
        }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="OTPVerification"
        component={OTPVerificationScreen}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
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
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerShown: true,
          headerTitle: "Edit Profile",
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "Change Password",
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
