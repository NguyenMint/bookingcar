import { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";
import { TextInput } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  groupInput: {
    margin: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 10,
  },
});
interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  addReview: any;
}
const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible, addReview } = props;
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  const handleSubmit = () => {
    if (!title) {
      Alert.alert("Vui lòng nhập nội dung", "Nội dung không thể để trống");
      return;
    }
    if (!star) {
      Alert.alert("Vui lòng nhập nội dung", "Rating không thể để trống");
      return;
    }
    addReview({
      id: Math.random(),
      title,
      star,
    });
    setModalVisible(false);
    setStar("");
    setTitle("");
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25 }}>Create Review</Text>
          <MaterialCommunityIcons
            onPress={() => setModalVisible(!modalVisible)}
            name="close"
            size={24}
            color="black"
          />
        </View>
        <View style={styles.groupInput}>
          <Text style={styles.text}>Nội dung</Text>
          <TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            style={styles.input}
          />
          <Text style={styles.text}>Rating</Text>
          <TextInput
            value={star}
            onChangeText={(value) => setStar(value)}
            keyboardType="numeric"
            style={styles.input}
          />
        </View>
        <View>
          <Button onPress={handleSubmit} title="Add"></Button>
        </View>
      </View>
    </Modal>
  );
};
export default CreateModal;
