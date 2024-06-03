import { Stack, useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Input } from "@rneui/base";

export default function AddTraining() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ name: "Future training" });
  }, [navigation]);

  const [exerciseName, setExerciseName] = useState("");

  return (
    <View style={styles.container}>
      <Input onChangeText={setExerciseName} value={exerciseName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: "90%",
    padding: 10,
  },
  exerciseName: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 0,
    paddingLeft: 5,
  },
});
