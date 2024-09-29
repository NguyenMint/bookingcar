import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SURGE_CHARGE_RATE = 1.45;
const data = [
  {
    title: "UberX",
    image: "https://links.papareact.com/5w8",
    price: "10",
    multipler: 1,
    id: 1,
  },
  {
    title: "UberXL",
    image: "https://links.papareact.com/3pn",
    price: "15.5",
    multipler: 1.4,
    id: 2,
  },
  {
    title: "UberLUX",
    image: "https://links.papareact.com/7pf",
    price: "21.4",
    multipler: 1.75,
    id: 3,
  },
];
const AboutScreen = () => {
  new Intl.NumberFormat("en-gb", {
    style: "currency",
    currency: "GBP",
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ paddingVertical: 25, fontSize: 20, textAlign: "center" }}>
        Select a Ride -
      </Text>
      <View style={{ height: 1, backgroundColor: "#ddd" }} />
      <TouchableOpacity
        style={{
          position: "absolute",

          top: 20,
          left: 20,
        }}
      ></TouchableOpacity>
      <View style={{ flex: 5 }}>
        <FlatList
          style={{ paddingHorizontal: 5 }}
          data={data}
          ItemSeparatorComponent={() => (
            <View style={{ height: 2, backgroundColor: "#eee" }} />
          )}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                paddingVertical: 2,
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <View>
                <Image
                  source={{ uri: item?.image }}
                  style={{ width: 120, height: 80, resizeMode: "contain" }}
                />
              </View>
              <View style={{ marginRight: 20, marginTop: 20 }}>
                <Text
                  style={{ fontSize: 22, color: "#444", fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 16, color: "#888" }}></Text>
              </View>
              <View style={{ marginLeft: -20 }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#444",
                    fontWeight: "bold",
                  }}
                ></Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
     

    </SafeAreaView>
  );
};
export default AboutScreen;
