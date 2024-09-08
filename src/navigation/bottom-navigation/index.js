import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, MyProfileScreen, OrdersScreen } from "../../screens";
import Feather from "@expo/vector-icons/Feather";
const Tab = createBottomTabNavigator();
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../constants/theme";
export function MyTabs() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerRight: () => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginRight: SIZES.margin.medium,
                gap: SIZES.margin.medium,
              }}
            >
              <TouchableOpacity>
                <Feather
                  name="help-circle"
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name="package"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyProfileScreen}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.text}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
