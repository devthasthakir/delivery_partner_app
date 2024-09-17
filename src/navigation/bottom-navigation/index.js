import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, MyProfileScreen, OrdersScreen } from "../../screens";
import Feather from "@expo/vector-icons/Feather";
import { useTheme } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity, View } from "react-native";
import { SIZES } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../constants/constants";

export function BottomTabs() {
  const theme = useTheme();
  const navigation = useNavigation();
  const Tab = createBottomTabNavigator();
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
              <TouchableOpacity
                onPress={() => navigation.navigate(SCREENS.CONTACT_SUPPORT.name)}
              >
                <Feather
                  name="help-circle"
                  size={24}
                  color={theme.colors.text}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS.name)}
              >
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
        name={SCREENS.HOME.name}
        component={HomeScreen}
        options={{
          tabBarLabel: SCREENS.HOME.title,
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
        name={SCREENS.ORDERS.name}
        component={OrdersScreen}
        options={{
          tabBarLabel: SCREENS.ORDERS.title,
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
        name={SCREENS.ACCOUNT.name}
        component={MyProfileScreen}
        options={{
          tabBarLabel: SCREENS.ACCOUNT.title,
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
