import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
// import AppHeader from "../navigation/app.header";
import CreateModal from "./create.modal";
import Feather from '@expo/vector-icons/Feather';
interface IReview {
  id: number;
  title: string;
  rate: number;
}
const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "pink",
    margin: 20,
  },
});
const HomeScreen = (prop: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React Native", rate: 5 },
    { id: 2, title: "React Native 2", rate: 5 },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const addReview=(item:IReview )=>{
    setReviews([...reviews, item])
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Review List!</Text>     
        <View style={{alignItems: "center"}} >
        <Feather onPress={() => setModalVisible(true)} name="plus-circle" size={40} color="blue" />
        </View>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Details", item)}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addReview={addReview}
      />
    </View>
  );
};
export default HomeScreen;
