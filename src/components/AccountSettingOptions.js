import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "../constants/icons";
import { FONTS, SIZES } from "../constants/theme";
import { useTheme } from "@react-navigation/native";

const AccountSettingOptions = ({ icon, title,containerStyle }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...containerStyle
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 50,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.border,
            borderRadius: SIZES.radius.small,
          }}
        >
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
              tintColor: theme.colors.primary,
            }}
            resizeMethod="contain"
          />
        </View>
        <Text
          style={{
            color: theme.colors.text,
            marginLeft: SIZES.margin.large,
            ...FONTS.body2,
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <Image
          source={icons.right_arrow}
          style={{ width: 24, height: 24, tintColor: theme.colors.text }}
        />
      </View>
    </View>
  );
};

export default AccountSettingOptions;
