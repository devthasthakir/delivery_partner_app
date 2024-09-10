import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { icons } from "../constants/icons";
import { useTheme } from "@react-navigation/native";
import { FONTS, SIZES } from "../constants/theme";

const NotificationItem = () => {
  const theme = useTheme();
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: SIZES.margin.medium,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            backgroundColor: theme.colors.border,
            width: 60,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.radius.small,
          }}
        >
          <Image
            source={icons.bell}
            style={{ width: 20, height: 20, tintColor: theme.colors.primary }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginLeft: SIZES.margin.small, flex: 1 }}>
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Poppins-SemiBold",
              color: theme.colors.text,
            }}
          >
            Mohammed Thasthakir
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexShrink: 1 }}>
              <Text
                style={{
                  ...FONTS.body3,
                  color: "grey",
                  marginTop: 5,
                }}
                numberOfLines={2}
              >
                This is sample text for notifications from delivery agent app
              </Text>
            </View>
            <Image
              source={icons.dot}
              style={{ width: 20, height: 20, tintColor: theme.colors.primary }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default NotificationItem;
