import { createDrawerNavigator } from "@react-navigation/drawer";
import { MyProfileScreen, HomeScreen } from "../../screens";
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="MyProfile" component={MyProfileScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
