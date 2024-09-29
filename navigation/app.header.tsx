import { StyleSheet, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { globalStyles } from "../utils/const";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",

    paddingVertical: 12,
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },
});

const AppHeader = () => {
  const navigation: any = useNavigation();
  return (
    <View style={styles.container}>
      <MaterialIcons
        onPress={() => {
          navigation.openDrawer();
        }}
        name="menu"
        size={24}
        color="black"
      />
      <Text style={[styles.headerText, globalStyles.globalFont]}>
        App Header
      </Text>
    </View>
  );
};
export default AppHeader;
