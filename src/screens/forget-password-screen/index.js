import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SIZES, FONTS } from "../../constants/theme";
import FormInput from "../../components/FormInput";
import { icons } from "../../constants/icons";
import { useTheme } from "@react-navigation/native";
import TextButton from "../../components/TextButton";

const ForgetPasswordScreen = ({ navigation }) => {
  const theme = useTheme();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.margin.medium,
        marginBottom: SIZES.margin.large,
      }}
    >
      <View style={{ marginTop: SIZES.margin.large   }}>
        <Text style={{ ...FONTS.h3, color: theme.colors.text }}>
          Forget Password
        </Text>
        <Text
          style={{
            color: theme.colors.text,
            marginTop: SIZES.margin.large,
            ...FONTS.body2,
          }}
        >
          Enter the email associated with your account and we'll send on email
          instructions to reset your password
        </Text>
      </View>
      <View style={{ marginTop: SIZES.margin.large * 2 }}>
        <View>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Email
          </Text>
          <FormInput placeholder={"Enter your email"} type="email" />
        </View>
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1 }}>
        <TextButton
          title={"Continue"}
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.large,
            borderRadius: SIZES.radius.large,
            marginTop: SIZES.margin.large * 2,
          }}
          titleStyle={{
            color: "white",
          }}
        />
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;
