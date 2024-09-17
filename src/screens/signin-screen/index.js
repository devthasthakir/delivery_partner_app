import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";
import { SCREENS } from "../../constants/constants";
import { utils } from "../../utils";
import LoadingAnimation from "../../components/LoadingAnimation";

const LoginScreen = ({ navigation }) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEndIconPress = () => {
    if (emailError) {
      setEmail("");
      setEmailError("");
    }
  };

  const handleSignIn = () => {
    navigation.navigate(SCREENS.OTP_VERIFICATION.name);
  };

  const handleForgetPassword = () => {
    navigation.navigate(SCREENS.FORGET_PASSWORD.name);
  };

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: SIZES.margin.medium }}>
      <LoadingAnimation visible={loading} />
      <View>
        <Text style={{ ...FONTS.h3, color: theme.colors.text }}>Sign In</Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <View>
          <FormInput
            placeholder={"Enter your email"}
            keyboardType="email-address"
            autoCompleteType="email"
            startIcon={icons.envelope}
            label={"Email"}
            errorMsg={emailError}
            onEndIconPress={handleEndIconPress}
            value={email}
            endIcon={
              email == "" || (email != "" && emailError == "")
                ? icons.correct
                : icons.cancel
            }
            onChangeText={(value) => {
              utils.validateEmail(value, setEmailError);
              setEmail(value);
            }}
            endIconTintColor={
              email == ""
                ? "grey"
                : email != "" && emailError == ""
                ? "green"
                : "red"
            }
          />
        </View>
        <View style={{ marginTop: SIZES.margin.small }}>
          <FormInput
            value={password}
            label="Password"
            onChangeText={(value) => setPassword(value)}
            autoCompleteType="password"
            placeholder={"Enter your password"}
            type="password"
            endIcon={secureTextEntry ? icons.eye : icons.eye_crossed}
            secureTextEntry={secureTextEntry}
            onEndIconPress={() => {
              setSecureTextEntry((state) => !state);
            }}
            startIcon={icons.lock}
            endIconTintColor={"grey"}
          />
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            width: "100%",
            alignItems: "flex-end",
          }}
        >
          <Pressable onPress={handleForgetPassword}>
            <Text
              style={{
                ...FONTS.body2,
                color: theme.colors.primary,
                textAlign: "right",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Forget password?
            </Text>
          </Pressable>
        </View>
        <TextButton
          title={"Sign In"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.large,
            marginTop: SIZES.margin.large * 2,
          }}
          titleStyle={{
            color: "white",
          }}
          disabled={isEnableSignIn() ? false : true}
          onPress={handleSignIn}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
