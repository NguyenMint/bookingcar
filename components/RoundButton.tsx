import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
    button:{
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: '#000',
        position: 'absolute',
        top: 20,
        left:20,
    }


});

const RoundButton = () => {
  return <View style={styles.button}>
    <Text>hello</Text>
  </View>;
};

export default RoundButton;
