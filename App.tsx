import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  Pressable,
  // SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { OPENSANS_REGULAR } from "./utils/const";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import BusBookingApp from "./screens/BusBookingApp";
import { RootStackParamList } from "./types/route";
import VehicleSelection from "./screens/VehicleSelection";
import TripList from "./screens/TripList";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  // Load Font
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  // End load Font
  // Navigator

  return (
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    //   <HomeScreen />
    //   <DetailScreen />
    //   <AboutScreen />
    // </View>
    // <NavigationContainer>

    // </NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      {/* <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      {/* <AutocompletePlacesInput /> 
      <AutocompletePlacesInput
        styleProps={{
          container: {
            flex: 1,
            position: "absolute",
            zIndex: 2,
            top: 45,
            width: "100%",
          },
        }}
        // onChangeInput={(data, details) => {
        //   dispatch(
        //     setOrigin({
        //       location: details.geometry.location,
        //       description: data.description,
        //     })
        //   );
        //   dispatch(setDestination(null));
        // }}
      /> */}
      {/* <HomeScreen1/> */}
      {/* <MapScreen />
      <RoundButton /> */}
      {/* <Screen2/> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="BusBooking">
          <Stack.Screen
            name="BusBooking"
            component={BusBookingApp}
            options={{ title: "Bus Booking" }}
          />
          <Stack.Screen
            name="VehicleSelection"
            component={VehicleSelection}
            options={{ title: "Select Vehicle" }}
          />
          <Stack.Screen
            name="TripList"
            component={TripList}
            options={{ title: "Available Trips" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // paddingTop: 50,
    // fontSize: 24,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
