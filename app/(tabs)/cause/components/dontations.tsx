import { Accordion } from "@/components/accordion";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  FlatList,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

type Props = { raised: number; goal: number };

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumSignificantDigits: 2,
});

export const Donations = ({ raised, goal }: Props) => {
  const [scaleBlockWidth, setScaleBlockWidth] = useState(0);

  const isAccordionExpandedShared = useSharedValue(false);
  const [isAccordionExpanded, setAccordionExpanded] = useState(false);

  return (
    <View style={styles.donationsContainer}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text style={styles.text}>Raised</Text>
        <Text style={styles.text}>Goal</Text>
      </View>
      <View
        style={{
          height: 40,
          backgroundColor: "#eee8",
          marginTop: 10,
          position: "relative",
        }}
        onLayout={(event) => {
          setScaleBlockWidth(event.nativeEvent.layout.width);
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            backgroundColor: "#E1FF39",
            width: scaleBlockWidth * (raised / goal),
          }}
        />
        <View
          style={{
            marginHorizontal: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Text style={styles.currencyText}>
            {currencyFormatter.format(raised)}
          </Text>
          <Text style={styles.currencyText}>
            {currencyFormatter.format(goal)}
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 16,
        }}
      >
        <TouchableWithoutFeedback
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
          onPress={() => {
            isAccordionExpandedShared.value = !isAccordionExpandedShared.value;
            setAccordionExpanded((prev) => !prev);
          }}
        >
          <Text
            style={{
              color: "#1D1D1D",
              fontWeight: "400",
              fontSize: 16,
              lineHeight: 18,
            }}
          >
            What will you do with that money?
          </Text>
          <AntDesign
            color="black"
            size={20}
            name={isAccordionExpanded ? "up" : "down"}
          />

          <Accordion
            isOpen={isAccordionExpandedShared}
            children={
              <View style={{ gap: 10, marginTop: 10 }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Entypo
                    name="dot-single"
                    size={24}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ flexBasis: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fermentum fringilla ipsum, sed laoreet enim auctor mollis.
                    Sed lacus lorem.
                  </Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Entypo
                    name="dot-single"
                    size={24}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ flexBasis: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fermentum fringilla ipsum, sed laoreet enim auctor mollis.
                    Sed lacus lorem.
                  </Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  <Entypo
                    name="dot-single"
                    size={24}
                    color="black"
                    style={{ marginRight: 5 }}
                  />
                  <Text style={{ flexBasis: "90%" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    fermentum fringilla ipsum, sed laoreet enim auctor mollis.
                    Sed lacus lorem.
                  </Text>
                </View>
              </View>
            }
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  donationsContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 36,
    marginTop: 24,
  },
  text: { fontWeight: "400", fontSize: 16, lineHeight: 18 },
  currencyText: { fontWeight: "500", fontSize: 20, lineHeight: 23 },
});
