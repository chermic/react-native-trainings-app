import { Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { BaseButton, TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  firstName: string;
  age: number;
  needs: string;
  donatorsCount: number;
};

export const MainContent = ({
  age,
  donatorsCount,
  firstName,
  needs,
}: Props) => {
  return (
    <View style={styles.mainContent}>
      <View style={styles.mainContentTextContainer}>
        <Text style={styles.mainContentText}>
          {firstName}, {age}, needs help with{" "}
          <Text style={styles.mainContentNeedsText}>{needs}</Text>
        </Text>
      </View>

      <View style={styles.shareAndFavoriteButtonsContainer}>
        <TouchableOpacity
          containerStyle={{ borderRadius: 4, backgroundColor: "#fff" }}
          style={{}}
        >
          <Fontisto name="bookmark" color="black" size={30} />
        </TouchableOpacity>
        <TouchableOpacity
          containerStyle={{ borderRadius: 4, backgroundColor: "#fff" }}
        >
          <MaterialCommunityIcons
            name="arrow-u-right-top-bold"
            color="black"
            size={30}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContentBottomRow}>
        {donatorsCount > 0 && (
          <View style={styles.helpedBy}>
            <Text style={styles.helpedByHeader}>Helped by</Text>
          </View>
        )}
        <BaseButton style={styles.helpButton} rippleColor="#333">
          <Text style={styles.helpButtonText}>Help {firstName}</Text>
        </BaseButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    marginLeft: 38,
    marginRight: 16,
    marginTop: 56,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  mainContentTextContainer: { flexBasis: "90%" },
  mainContentText: { fontSize: 38, lineHeight: 38, fontWeight: "400" },
  mainContentNeedsText: { fontWeight: "700" },
  shareAndFavoriteButtonsContainer: {
    gap: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContentBottomRow: {
    flexGrow: 1,
    marginTop: 16,
  },
  helpedBy: {
    flexDirection: "row",
    alignItems: "center",
  },
  helpedByHeader: {
    fontSize: 16,
    fontWeight: "400",
  },
  helpButton: {
    marginLeft: "auto",
    paddingHorizontal: 52,
    paddingVertical: 27,
    backgroundColor: "#1D1D1D",
    borderRadius: 50,
  },
  helpButtonText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
