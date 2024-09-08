import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { SIZES, FONTS } from "../constants/theme";
import { icons } from "../constants/icons";
import { useNavigation } from "@react-navigation/native";
import TextButton from "./TextButton";
const OrderCard = ({ disabled,buttonTitle }) => {
  const theme = useTheme();
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        backgroundColor: theme.colors.card,
        elevation: 2,
        borderRadius: SIZES.radius.small,
        paddingHorizontal: SIZES.padding.small,
        paddingVertical: SIZES.padding.medium,
        marginHorizontal: SIZES.margin.medium,
        marginTop: SIZES.margin.small,
        marginBottom: SIZES.margin.small,
      }}
      disabled={disabled}
      onPress={() => navigation.navigate("ReachPickUp")}
    >
      {/* OrderID Section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: SIZES.margin.small,
        }}
      >
        <View
          style={{
            backgroundColor: theme.colors.primary,
            padding: SIZES.padding.small,
            borderRadius: SIZES.radius.small,
          }}
        >
          <Image
            source={icons.truck}
            style={{ width: 20, height: 20, tintColor: "white" }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginLeft: SIZES.margin.small }}>
          <Text
            style={{
              ...FONTS.body2,
              color: theme.colors.text,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Order ID #123456789
          </Text>
          <Text style={{ ...FONTS.body3, color: "grey" }}>5 Items</Text>
        </View>
      </View>

      {/* Details Section */}

      <View
        style={{
          padding: SIZES.padding.medium,
          marginTop: SIZES.margin.medium,
        }}
      >
        {/* Name Section */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              Seller Name
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={1}
            >
              Mohammed
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              Customer Name
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={1}
            >
              Mohammed Thasthakir
            </Text>
          </View>
        </View>
        {/* Address Section */}
        <View
          style={{
            flexDirection: "row",
            marginVertical: SIZES.margin.medium,
            gap: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              From
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={2}
            >
              No 52/104, Egmore High Road, Egmore, Chennai, 600008
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              To
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={2}
            >
              No 25/36, Pallappan street, Trplicane, Chennai, 600005
            </Text>
          </View>
        </View>
        {/* Name Section */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              Trip Distance
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={1}
            >
              20.5km
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "grey",
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
              }}
            >
              Payment Status
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                fontFamily: "Poppins-Medium",
                color: theme.colors.text,
              }}
              numberOfLines={1}
            >
              Paid online
            </Text>
          </View>
        </View>
      </View>

      {/* Buttons */}
      <View
        style={{
          paddingHorizontal: SIZES.padding.medium,
        }}
      >
        <TextButton
          title={buttonTitle}
          containerStyle={{
            height: SIZES.buttonHeight.medium,
            backgroundColor: theme.colors.primary,
            borderRadius: SIZES.radius.small,
          }}
          titleStyle={{
            color: "white",
          }}
        />
      </View>
    </Pressable>
  );
};

export default OrderCard;
