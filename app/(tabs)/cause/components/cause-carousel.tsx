import { Image, StyleSheet, View } from "react-native";

type Props = { imageUlr: string };

export const CauseCarousel = ({ imageUlr }: Props) => {
  return (
    <View style={styles.mainImageContainer}>
      <Image
        source={{
          uri: imageUlr,
          width: 305,
          height: 395,
        }}
        style={{ margin: "auto" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainImageContainer: {
    marginTop: 32,
  },
});
