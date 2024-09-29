import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    fontSize: 24,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item1: {
    backgroundColor: "green",
    padding: 30,
  },
  item2: {
    backgroundColor: "orange",
    padding: 30,
  },
  item3: {
    backgroundColor: "cyan",
    padding: 30,
  },
  item4: {
    backgroundColor: "pink",
    padding: 30,
  },
});

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>Item 1</Text>
      </View>
      <View style={styles.item2}>
        <Text>Item 2</Text>
      </View>
      <View style={styles.item3}>
        <Text>Item 3</Text>
      </View>
      <View style={styles.item4}>
        <Text>Item 4</Text>
      </View>
    </View>
  );
};
export default FlexBox;
