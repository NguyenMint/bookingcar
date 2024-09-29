import AppHeader from "./app.header";
import HomeScreen from "../components/review/home";
import DetailScreen from "../components/review/detail";
import AboutScreen from "../components/review/about";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => <AppHeader /> }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};
const AppNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home1"
        component={HomeLayout}
        options={{ header: () => <></> }}
      />
      <Drawer.Screen
        name="Detail"
        component={DetailScreen}
        options={{ header: () => <AppHeader /> }}
      />
    </Drawer.Navigator>
  );
};
export default AppNavigator;
