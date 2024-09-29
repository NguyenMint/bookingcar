// screens/BusBookingApp.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/route";

type BusBookingAppNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "BusBooking"
>;

const BusBookingApp = () => {
  const navigation = useNavigation<BusBookingAppNavigationProp>();
  const [departure, setDeparture] = useState("Hà Nội");
  const [destination, setDestination] = useState("Nghệ An");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [date, setDate] = useState("01/09/2024"); // Add a date state

  // Handle Search Button Press
  const handleSearch = () => {
    if (!departure || !destination || !date) {
      Alert.alert("Error", "Please provide all required information.");
      return;
    }

    navigation.navigate("VehicleSelection", {
      departure,
      destination,
      date,
      isRoundTrip,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header and other UI components */}

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nơi xuất phát</Text>
        <TextInput
          style={styles.input}
          value={departure}
          onChangeText={setDeparture}
          placeholder="Enter departure location"
        />
        <Text style={styles.label}>Bạn muốn đi đâu?</Text>
        <TextInput
          style={styles.input}
          value={destination}
          onChangeText={setDestination}
          placeholder="Enter destination"
        />
        <View style={styles.row}>
          <Text style={styles.label}>Ngày đi</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            placeholder="Enter date (dd/mm/yyyy)"
          />
          <Switch value={isRoundTrip} onValueChange={setIsRoundTrip} />
          <Text style={styles.label}>Khứ hồi</Text>
        </View>
      </View>

      {/* Search Button */}
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Tìm kiếm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    fontSize: 18,
    color: "#000",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    fontSize: 16,
    color: "#000",
  },
  banner: {
    backgroundColor: "#287BFF",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  bannerText: {
    color: "#fff",
    fontSize: 14,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  tabItem: {
    paddingVertical: 8,
    color: "#555",
  },
  activeTab: {
    color: "#287BFF",
    borderBottomWidth: 2,
    borderBottomColor: "#287BFF",
  },
  inputContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchButton: {
    backgroundColor: "#FBC02D",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 15,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  recentSearches: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentSearchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  recentSearchItem: {
    fontSize: 14,
  },
  dateText: {
    fontSize: 12,
    color: "#888",
  },
  clearText: {
    color: "#287BFF",
    fontSize: 14,
    alignSelf: "flex-end",
  },
  popularRoutes: {
    marginVertical: 20,
  },
  routeImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navItem: {
    fontSize: 14,
    color: "#555",
  },
});

export default BusBookingApp;
