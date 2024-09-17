// CustomInput.js
import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Pressable,
} from "react-native";
import { SIZES, FONTS } from "../constants/theme";
import { useTheme } from "@react-navigation/native";

const FormInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  startIcon,
  endIcon,
  onEndIconPress,
  label,
  errorMsg,
  endIconTintColor,
  keyboardType = "default",
  autoCompleteType = "off",
  readOnly,
  ...props
}) => {
  const theme = useTheme();
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            ...FONTS.body2,
            color: theme.colors.text,
            fontFamily: "Poppins-Medium",
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            color: "red",
            ...FONTS.body3,
            fontFamily: "Poppins-Medium",
          }}
        >
          {errorMsg}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "grey",
          marginVertical: 10,
          borderRadius: SIZES.radius.medium,
          paddingVertical: 5,
          height: SIZES.buttonHeight.large,
        }}
      >
        {startIcon && (
          <View
            style={{
              marginLeft: SIZES.margin.medium,
            }}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: theme.colors.text }}
              resizeMode="contain"
              source={startIcon}
            />
          </View>
        )}
        <TextInput
          style={{
            flex: 1,
            paddingVertical: 10,
            paddingHorizontal: SIZES.padding.medium,
            fontSize: 16,
            color: theme.colors.text,
          }}
          placeholderTextColor="grey"
          value={value}
          onChangeText={(text) => onChangeText(text)}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          readOnly={readOnly}
          {...props}
        />
        {endIcon && (
          <Pressable
            onPress={onEndIconPress}
            style={{ marginRight: SIZES.margin.medium }}
          >
            <Image
              style={{ width: 20, height: 20, tintColor: endIconTintColor }}
              resizeMode="contain"
              source={endIcon}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormInput;
