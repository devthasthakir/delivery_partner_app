import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens Import
import { BottomTabs } from "./bottom-navigation";
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
  SignatureScreen,
  OnboardingScreen,
} from "../screens";
import { SCREENS } from "../constants/constants";

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="EditProfile"
    >
      <Stack.Screen
        name={SCREENS.ONBOARDING.name}
        component={OnboardingScreen}
      />
      <Stack.Screen
        name={SCREENS.SIGN_IN.name}
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen name="Drawer" component={BottomTabs} />
      <Stack.Screen
        name={SCREENS.OTP_VERIFICATION.name}
        component={OTPVerificationScreen}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name={SCREENS.FORGET_PASSWORD.name}
        component={ForgetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name={SCREENS.CONTACT_SUPPORT.name}
        component={ContactSupportScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.CONTACT_SUPPORT.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.TERMS_CONDITION.name}
        component={TermsConditionScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.TERMS_CONDITION.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.NOTIFICATIONS.name}
        component={NotificationScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.NOTIFICATIONS.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.EDIT_PROFILE.name}
        component={EditProfileScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.EDIT_PROFILE.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.CHANGE_PASSWORD.name}
        component={ChangePasswordScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.CHANGE_PASSWORD.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.PICKUP_ORDER.name}
        component={PickupOrderScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.PICKUP_ORDER.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.REACH_PICKUP.name}
        component={ReachPickupScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.REACH_PICKUP.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.REACH_DROP.name}
        component={ReachDropScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.REACH_DROP.title,
        }}
      />
      <Stack.Screen
        name={SCREENS.DROP_ORDER.name}
        component={DropOrderScreen}
        options={{
          headerShown: true,
          headerTitle: SCREENS.DROP_ORDER.title,
        }}
      />
      <Stack.Screen name="Signature" component={SignatureScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
