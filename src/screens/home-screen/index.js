import React, { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import OrderCard from "../../components/OrderCard";
import { SIZES, FONTS } from "../../constants/theme";
import { useTheme } from "@react-navigation/native";
import { icons } from "../../constants/icons";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("window");
  const ASPECT_RATIO = width / height;
  const LATITUDE = 13.064262;
  const LONGITUDE = 80.283791;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const theme = useTheme();

  const GOOGLE_MAPS_APIKEY = "AIzaSyBXVFktsGXZBC2cT89xUmC2xgdkF8wuzgQ";
  const [coordinates, setCoordinates] = useState([
    {
      latitude: 13.064262,
      longitude: 80.283791,
    },
    {
      latitude: 13.003387,
      longitude: 80.255043,
    },
  ]);

  const mapView = useRef(null);
  const destination = {
    latitude: 13.003387,
    longitude: 80.255043,
  };

  const openMaps = () => {
    const url = Platform.select({
      ios: `maps://app?daddr=${destination.latitude},${destination.longitude}`,
      android: `https://www.google.com/maps/dir/?api=1&destination=${destination.latitude},${destination.longitude}`,
    });

    Linking.openURL(url)
      .then(() => {
        console.log("Opened directions");
      })
      .catch((err) => {
        console.error("An error occurred while trying to open maps", err);
      });
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* <MapView
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        style={{
          width: "100%",
          height: 300,
        }}
        ref={mapView}
        // onPress={onMapPress}
      >
        {coordinates.map((coordinate, index) => (
          <Marker key={`coordinate_${index}`} coordinate={coordinate} />
        ))}
        {coordinates.length >= 2 && (
          <MapViewDirections
            origin={coordinates[0]}
            waypoints={
              coordinates.length > 2 ? coordinates.slice(1, -1) : undefined
            }
            destination={coordinates[coordinates.length - 1]}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onStart={(params) => {
              console.log(
                `Started routing between "${params.origin}" and "${params.destination}"`
              );
            }}
            onReady={(result) => {
              console.log(`Distance: ${result.distance} km`);
              console.log(`Duration: ${result.duration} min.`);

              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
            onError={(errorMessage) => {
              // console.log('GOT AN ERROR');
            }}
          />
        )}
      </MapView> */}
      {/* <Button title="Go to Directions" onPress={openMaps} /> */}
      <View>
        <View
          style={{
            marginHorizontal: SIZES.margin.medium,
            marginVertical: SIZES.margin.small,
          }}
        >
          <View style={{ flexDirection: "row", gap: SIZES.margin.medium }}>
            <View
              style={{
                backgroundColor: theme.colors.card,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.small,
                flex: 1,
                elevation: 2,
                shadowColor: "#000", // Color of the shadow
                shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
                shadowOpacity: 0.2, // Opacity of the shadow
                shadowRadius: 2, // Radius of the shadow
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={icons.all_orders}
                  style={{ width: "80%", height: 50 }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text
                  style={{
                    color: theme.colors.text,

                    marginTop: SIZES.margin.small,
                    ...FONTS.body2,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  All Orders
                </Text>
                <Text
                  style={{
                    color: "grey",
                    ...FONTS.body2,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  100
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.card,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.small,
                flex: 1,
                elevation: 2,
                shadowColor: "#000", // Color of the shadow
                shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
                shadowOpacity: 0.2, // Opacity of the shadow
                shadowRadius: 2, // Radius of the shadow
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={icons.ongoing_orders}
                  style={{ width: "80%", height: 50 }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text
                  style={{
                    color: theme.colors.text,

                    marginTop: SIZES.margin.small,
                    ...FONTS.body2,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Ongoing Orders
                </Text>
                <Text
                  style={{
                    color: "grey",
                    ...FONTS.body2,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  100
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: SIZES.margin.medium,
              marginTop: SIZES.margin.medium,
            }}
          >
            <View
              style={{
                backgroundColor: theme.colors.card,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.small,
                flex: 1,
                elevation: 2,
                shadowColor: "#000", // Color of the shadow
                shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
                shadowOpacity: 0.2, // Opacity of the shadow
                shadowRadius: 2, // Radius of the shadow
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={icons.pending_orders}
                  style={{ width: "80%", height: 50 }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text
                  style={{
                    color: theme.colors.text,

                    marginTop: SIZES.margin.small,
                    ...FONTS.body2,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Pending Orders
                </Text>
                <Text
                  style={{
                    color: "grey",
                    ...FONTS.body2,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  100
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: theme.colors.card,
                padding: SIZES.padding.medium,
                borderRadius: SIZES.radius.small,
                flex: 1,
                elevation: 2,
                shadowColor: "#000", // Color of the shadow
                shadowOffset: { width: 0, height: 2 }, // Offset of the shadow
                shadowOpacity: 0.2, // Opacity of the shadow
                shadowRadius: 2, // Radius of the shadow
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={icons.completed_orders}
                  style={{ width: "80%", height: 50 }}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Text
                  style={{
                    color: theme.colors.text,

                    marginTop: SIZES.margin.small,
                    ...FONTS.body2,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Completed Orders
                </Text>
                <Text
                  style={{
                    color: "grey",
                    ...FONTS.body2,
                    fontFamily: "Poppins-Medium",
                  }}
                >
                  100
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              marginHorizontal: SIZES.margin.medium,
              ...FONTS.body1,
              fontFamily: "Poppins-Medium",
              color: theme.colors.text,
              marginVertical: SIZES.margin.small,
            }}
          >
            Current Order
          </Text>
        </View>
        <OrderCard buttonTitle={"View Order"} />
      </View>
    </ScrollView>
  );
}
