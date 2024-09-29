import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import IconStar from "../../assets/images/star.png";

const DetailScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "Details"> = useRoute();

  return (
    <View style={styles.reviewContainer}>
      <Text style={[styles.review, globalStyles.globalFont]}>
        Review Detail
      </Text>
      <Text style={[styles.reviewDetail, globalStyles.globalFont]}>
        Id: {route.params?.id}
      </Text>
      <Text style={[styles.reviewDetail, globalStyles.globalFont]}>
        Tiêu đề: {route.params?.title}
      </Text>
      <Text style={[styles.reviewDetail, globalStyles.globalFont]}>
        Rating: {route.params?.rate}
      </Text>
      <View style={{ flexDirection: "row", gap:11 }}>
        <Image
          style={{ height: 60, width: 50 }}
          source={IconStar}
          />
        <Image
          style={{ height: 60, width: 50 }}
          source={IconStar}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={IconStar}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={IconStar}
        />
        <Image
          style={{ height: 60, width: 50 }}
          source={IconStar}
        />
      </View>
      <Button title="Go Home" onPress={() => navigation.goBack()} />
      <Button title="Go About" onPress={() => navigation.navigate("About")} />
      {/* <Button title="Go Home" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
  },
  reviewDetail: {
    fontSize: 25,
    padding: 15,
  },
  reviewContainer: {},
});
