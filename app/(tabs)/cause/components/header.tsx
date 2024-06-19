import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

type Props = { isPicked: boolean };

export const Header = ({ isPicked }: Props) => {
  return (
    <View style={styles.headerContainer}>
      {isPicked && (
        <View style={styles.headerLeftBlock}>
          <Image source={require("@/assets/images/hand-black.png")} />
          <Text style={styles.headerText}>Picked{"\n"}for you</Text>
        </View>
      )}
      <BorderlessButton style={{ marginLeft: "auto" }}>
        <View style={styles.headerCrossContainer}>
          <Ionicons name="close-outline" size={24} color="black" />
        </View>
      </BorderlessButton>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    marginTop: 24,
  },
  headerLeftBlock: { flexDirection: "row", alignItems: "center" },
  headerText: { fontSize: 20, marginLeft: 4 },
  headerCrossContainer: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D1D1D1A",
    borderRadius: 50,
  },
});
