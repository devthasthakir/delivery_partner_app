import { View, Text, Image, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";
import { FONTS, SIZES } from "../../constants/theme";
import { icons } from "../../constants/icons";
const ContactSupportScreen = () => {
  const [showOrderDetails, setShowOrderDetails] = useState(true);
  const theme = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          marginHorizontal: SIZES.margin.medium,
          marginVertical: SIZES.margin.large,
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: theme.colors.card,
              elevation: 2,
              padding: SIZES.padding.medium,
              flexDirection: "row",
              borderRadius: SIZES.radius.small,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.border,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.pill,
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.colors.primary,
                }}
                source={icons.call}
              />
            </View>
            <View style={{ marginLeft: SIZES.margin.medium }}>
              <Text
                style={{
                  ...FONTS.body3,
                  fontFamily: "Poppins-Medium",
                  color: "grey",
                }}
              >
                Our 24x7 Customer Service
              </Text>
              <Text
                style={{
                  ...FONTS.body2,
                  fontFamily: "Poppins-SemiBold",
                  marginTop: 4,
                  color: theme.colors.primary,
                }}
              >
                +916369383954
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: theme.colors.card,
              elevation: 2,
              padding: SIZES.padding.medium,
              flexDirection: "row",
              borderRadius: SIZES.radius.small,
              alignItems: "center",
              marginTop: SIZES.margin.medium,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.border,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.pill,
              }}
            >
              <Image
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.colors.primary,
                }}
                source={icons.email}
              />
            </View>
            <View style={{ marginLeft: SIZES.margin.medium }}>
              <Text
                style={{
                  ...FONTS.body3,
                  fontFamily: "Poppins-Medium",
                  color: "grey",
                }}
              >
                Write us at
              </Text>
              <Text
                style={{
                  ...FONTS.body2,
                  fontFamily: "Poppins-SemiBold",
                  marginTop: 4,
                  color: theme.colors.primary,
                }}
              >
                mohammed@gmail.com
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: SIZES.margin.large * 2 }}>
          <Text
            style={{
              ...FONTS.body2,
              fontFamily: "Poppins-Medium",
              color: "grey",
            }}
          >
            Frequently Asked Questions
          </Text>
          <View
            style={{
              paddingVertical: SIZES.margin.medium,
              backgroundColor: theme.colors.card,
              elevation: 2,
              marginTop: SIZES.margin.medium,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: SIZES.margin.large,
                alignItems: "center",
              }}
              onPress={() => setShowOrderDetails((state) => !state)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{}}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    How to cancel a order?
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showOrderDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 16,
                      height: 16,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            {showOrderDetails && (
              <View
                style={{
                  paddingHorizontal: SIZES.margin.medium,
                  marginTop: SIZES.margin.small,

                  paddingTop: SIZES.margin.small,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  1 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Veg Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  5 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Chicken Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  7 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    French Fries
                  </Text>
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              paddingVertical: SIZES.margin.medium,
              backgroundColor: theme.colors.card,
              elevation: 2,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: SIZES.margin.large,
                alignItems: "center",
              }}
              onPress={() => setShowOrderDetails((state) => !state)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{}}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    How to cancel a order?
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showOrderDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 16,
                      height: 16,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            {showOrderDetails && (
              <View
                style={{
                  paddingHorizontal: SIZES.margin.medium,
                  marginTop: SIZES.margin.small,

                  paddingTop: SIZES.margin.small,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  1 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Veg Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  5 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Chicken Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  7 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    French Fries
                  </Text>
                </Text>
              </View>
            )}
          </View>
          <View
            style={{
              paddingVertical: SIZES.margin.medium,
              backgroundColor: theme.colors.card,
              elevation: 2,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: SIZES.margin.large,
                alignItems: "center",
              }}
              onPress={() => setShowOrderDetails((state) => !state)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{}}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    How to cancel a order?
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showOrderDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 16,
                      height: 16,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            {showOrderDetails && (
              <View
                style={{
                  paddingHorizontal: SIZES.margin.medium,
                  marginTop: SIZES.margin.small,

                  paddingTop: SIZES.margin.small,
                }}
              >
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  1 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Veg Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  5 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    Chicken Burger
                  </Text>
                </Text>
                <Text
                  style={{
                    color: theme.colors.text,
                    ...FONTS.body2,
                    fontFamily: "Poppins-Bold",
                    marginBottom: SIZES.margin.small,
                  }}
                >
                  7 x{" "}
                  <Text style={{ color: "grey", fontFamily: "Poppins-Light" }}>
                    French Fries
                  </Text>
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContactSupportScreen;
