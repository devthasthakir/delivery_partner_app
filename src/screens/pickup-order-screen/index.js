import React, { useEffect, useState, useCallback, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FONTS, SIZES } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
import { icons } from "../../constants/icons";
export default function PickupOrderScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(true);
  const [showSellerDetails, setShowSellerDetails] = useState(false);
  const [showCustomerDetails, setShowCustomerDetails] = useState(false);

  // ref
  const bottomSheetRef = useRef(null);
  const theme = useTheme();
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      longitudeDelta: 0.0421,
      latitudeDelta: 0.0922,
    });
  };

  return (
    <View style={{ flex: 1, marginBottom: SIZES.margin.large * 2 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, height: "100%" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginVertical: SIZES.margin.large,
            }}
          >
            <Text
              style={{
                color: "grey",
                ...FONTS.h6,
                marginBottom: SIZES.margin.small,
              }}
            >
              ORDER ID
            </Text>
            <Text style={{ color: "grey", ...FONTS.h2 }}>4565676788</Text>
          </View>

          {/* Order Details */}
          <View
            style={{
              borderWidth: 0.3,
              borderColor: "grey",
              paddingVertical: SIZES.margin.small,
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
                <View
                  style={{
                    backgroundColor: theme.colors.card,
                    padding: SIZES.padding.small,
                    borderRadius: SIZES.radius.large,
                  }}
                >
                  <Image
                    source={icons.order}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: "grey",
                    }}
                  />
                </View>
                <View style={{ marginLeft: SIZES.margin.small }}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    Order details
                  </Text>
                  <Text style={{ color: "grey", ...FONTS.body3 }}>
                    Burger Shop
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showOrderDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 18,
                      height: 18,
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
                  borderTopColor: "grey",
                  borderTopWidth: 0.3,
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

          {/* Seller Details */}
          <View
            style={{
              borderWidth: 0.3,
              borderColor: "grey",
              paddingVertical: SIZES.margin.small,
              marginTop: SIZES.margin.large,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: SIZES.margin.large,
                alignItems: "center",
              }}
              onPress={() => setShowSellerDetails((state) => !state)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: theme.colors.card,
                    padding: SIZES.padding.small,
                    borderRadius: SIZES.radius.large,
                  }}
                >
                  <Image
                    source={icons.order}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: "grey",
                    }}
                  />
                </View>
                <View style={{ marginLeft: SIZES.margin.small }}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    Seller details
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showSellerDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 18,
                      height: 18,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            {showSellerDetails && (
              <View
                style={{
                  paddingHorizontal: SIZES.margin.medium,
                  marginTop: SIZES.margin.small,
                  borderTopColor: "grey",
                  borderTopWidth: 0.3,
                  paddingTop: SIZES.margin.small,
                }}
              >
                <View style={{ marginTop: SIZES.margin.small }}>
                  <Text
                    style={{
                      ...FONTS.h5,
                      // fontWeight: "bold",
                      marginBottom: SIZES.margin.small,
                      color: theme.colors.text,
                    }}
                  >
                    Mohammed Thasthakir
                  </Text>
                  <Text style={{ ...FONTS.body2, color: theme.colors.text }}>
                    No 52/104, Egmore High Road, Egmore, Chennai, 600008,
                    TamilNadu, India
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: SIZES.margin.large,
                  }}
                >
                  <IconButton
                    title="Call"
                    containerStyle={{
                      flex: 1,
                      borderWidth: 0.3,
                      borderColor: theme.colors.primary,
                      height: SIZES.buttonHeight.medium,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
                    }}
                    icon={icons.call}
                    iconSize={18}
                    iconColor={theme.colors.primary}
                  />
                  <IconButton
                    title="Go to map"
                    containerStyle={{
                      flex: 1,
                      height: SIZES.buttonHeight.medium,
                      borderWidth: 0.3,
                      borderColor: theme.colors.primary,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
                    }}
                    icon={icons.direction}
                    iconSize={18}
                    iconColor={theme.colors.primary}
                  />
                </View>
              </View>
            )}
          </View>

          {/* Customer Details */}
          <View
            style={{
              borderWidth: 0.3,
              borderColor: "grey",
              paddingVertical: SIZES.margin.small,
              marginVertical: SIZES.margin.large,
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: SIZES.margin.large,
                alignItems: "center",
              }}
              onPress={() => setShowCustomerDetails((state) => !state)}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: theme.colors.card,
                    padding: SIZES.padding.small,
                    borderRadius: SIZES.radius.large,
                  }}
                >
                  <Image
                    source={icons.order}
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: "grey",
                    }}
                  />
                </View>
                <View style={{ marginLeft: SIZES.margin.small }}>
                  <Text style={{ color: theme.colors.text, ...FONTS.h6 }}>
                    Customer details
                  </Text>
                </View>
              </View>
              <View>
                <View>
                  <Image
                    source={showCustomerDetails ? icons.up : icons.down}
                    style={{
                      tintColor: theme.colors.text,
                      width: 18,
                      height: 18,
                    }}
                  />
                </View>
              </View>
            </Pressable>
            {showCustomerDetails && (
              <View
                style={{
                  paddingHorizontal: SIZES.margin.medium,
                  marginTop: SIZES.margin.small,
                  borderTopColor: "grey",
                  borderTopWidth: 0.3,
                  paddingTop: SIZES.margin.small,
                }}
              >
                <View style={{ marginTop: SIZES.margin.small }}>
                  <Text
                    style={{
                      ...FONTS.h5,
                      // fontWeight: "bold",
                      marginBottom: SIZES.margin.small,
                      color: theme.colors.text,
                    }}
                  >
                    Mohammed Thasthakir
                  </Text>
                  <Text style={{ ...FONTS.body2, color: theme.colors.text }}>
                    No 52/104, Egmore High Road, Egmore, Chennai, 600008,
                    TamilNadu, India
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginVertical: SIZES.margin.large,
                  }}
                >
                  <IconButton
                    title="Call"
                    containerStyle={{
                      flex: 1,
                      borderWidth: 0.3,
                      borderColor: theme.colors.primary,
                      height: SIZES.buttonHeight.medium,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
                    }}
                    icon={icons.call}
                    iconSize={18}
                    iconColor={theme.colors.primary}
                  />
                  <IconButton
                    title="Go to map"
                    containerStyle={{
                      flex: 1,
                      height: SIZES.buttonHeight.medium,
                      borderWidth: 0.3,
                      borderColor: theme.colors.primary,
                    }}
                    titleStyle={{
                      color: theme.colors.primary,
                    }}
                    icon={icons.direction}
                    iconSize={18}
                    iconColor={theme.colors.primary}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: "flex-end",
          marginHorizontal: SIZES.margin.small,
        }}
      >
        <TextButton
          title="Picked Order"
          containerStyle={{
            backgroundColor: theme.colors.primary,
            height: SIZES.buttonHeight.medium,
            borderRadius: SIZES.radius.medium,
          }}
          titleStyle={{
            color: "white",
            ...FONTS.body1,
          }}
          onPress={() => {
            navigation.navigate("ReachDrop");
          }}
          disabled={false}
        />
      </View>
    </View>
  );
}
