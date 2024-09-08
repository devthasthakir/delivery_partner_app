import React, { useEffect, useState, useCallback, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import { Image, StyleSheet, View, Text } from "react-native";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { FONTS, SIZES } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import IconButton from "../../components/IconButton";
import TextButton from "../../components/TextButton";
import { icons } from "../../constants/icons";
export default function ReachPickupScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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
    <GestureHandlerRootView>
      <View style={styles.container}>
        {location && (
          <MapView
            style={styles.map}
            region={location}
            zoomEnabled
            showsMyLocationButton={true}
            showsUserLocation
            showsCompass
          >
            <Marker
              coordinate={{ latitude: 13.067439, longitude: 80.237617 }}
            />
            <MapViewDirections
              origin={location}
              destination={{ latitude: 13.067439, longitude: 80.237617 }}
              apikey={"AIzaSyBXVFktsGXZBC2cT89xUmC2xgdkF8wuzgQ"}
              timePrecision="now"
              strokeWidth={3}
              strokeColor="hotpink"
            />
          </MapView>
        )}

        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={["60%", "30%"]}
          backgroundStyle={{
            backgroundColor: theme.colors.card,
          }}
          handleIndicatorStyle={{
            backgroundColor: theme.colors.text,
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, marginHorizontal: SIZES.margin.medium }}>
              <View>
                <View style={{ marginHorizontal: SIZES.margin.small }}>
                  <View style={{ marginTop: SIZES.margin.large }}>
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
                        height: SIZES.buttonHeight.medium,
                        borderColor: theme.colors.primary,
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
                        backgroundColor: theme.colors.primary,
                        height: SIZES.buttonHeight.medium,
                      }}
                      titleStyle={{
                        color: "white",
                      }}
                      icon={icons.direction}
                      iconSize={18}
                      iconColor={"white"}
                    />
                  </View>
                </View>
                <View style={{ marginBottom: SIZES.margin.large }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={icons.order}
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: "grey",
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: SIZES.padding.small,
                        ...FONTS.body2,
                        color: "grey",
                      }}
                    >
                      Order: 12345678
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginTop: SIZES.margin.small,
                    }}
                  >
                    <Image
                      source={icons.user}
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: "grey",
                      }}
                    />
                    <Text
                      style={{
                        marginLeft: SIZES.padding.small,
                        ...FONTS.body2,
                        color: "grey",
                      }}
                    >
                      Customer: Mohammed Thasthakir
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginVertical: SIZES.margin.large,
                    marginHorizontal: SIZES.margin.small,
                  }}
                >
                  <TextButton
                    title="Reached pickup location"
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
                      navigation.navigate("PickUpOrder");
                    }}
                    disabled={false}
                  />
                </View>
              </View>
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
  },
});
