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
  ...props
}) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "grey",
        marginVertical: 10,
        borderRadius: SIZES.radius.large,
        paddingVertical: 5,
      }}
    >
      {startIcon && (
        <View
          style={{
            marginLeft: SIZES.margin.medium,
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
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
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {endIcon && (
        <Pressable
          onPress={onEndIconPress}
          style={{ marginRight: SIZES.margin.medium }}
        >
          <Image
            style={{ width: 20, height: 20, tintColor: "grey" }}
            resizeMode="contain"
            source={endIcon}
          />
        </Pressable>
      )}
    </View>
  );
};

export default FormInput;
