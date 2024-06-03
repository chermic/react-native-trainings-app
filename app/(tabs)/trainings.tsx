import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function MyScreen() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Link href="/add-past-training" style={styles.link}>
        Добавить прошедшую тренировку
      </Link>
      <Link href="/add-future-training" style={styles.link}>
        Добавить план тренировки
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  link: {
    color: "black",
    borderColor: "white",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 5,
    backgroundColor: 'cyan'
  },
});
