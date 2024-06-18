import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Cause() {
  return (
    <ThemedView>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <View style={styles.headerLeftBlock}>
            <Image source={require("@/assets/images/hand-black.png")} />
            <Text style={styles.headerText}>Picked{"\n"}for you</Text>
          </View>
          <BorderlessButton>
            <View style={styles.headerCrossWrapper}>
              <Ionicons name="close-outline" size={24} color="black" />
            </View>
          </BorderlessButton>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  headerLeftBlock: { flexDirection: "row", alignItems: "center" },
  headerText: { fontSize: 20, marginLeft: 4 },
  headerCrossWrapper: {
    width: 38,
    height: 38,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1D1D1D1A",
    borderRadius: 50,
  },
  headerCrossButton: {},
  headerCross: {
    width: 16,
    height: 16,
  },
});
