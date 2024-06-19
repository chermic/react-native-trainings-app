import { StyleSheet, View } from "react-native";

type Props = { styles?: Record<string, unknown> };

export const HorizontalSeparator = ({ styles: stylesFromProps }: Props) => (
  <View style={[styles.horizontalSeparator, stylesFromProps]} />
);

const styles = StyleSheet.create({
  horizontalSeparator: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    borderStyle: "solid",
  },
});
