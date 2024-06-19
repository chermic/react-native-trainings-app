import { Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-ui-lib/carousel";

type Props = {
  photos: string[];
  name: string;
  description: string[];
  galleryDescription: string;
};

export const PersonDescription = ({
  description,
  galleryDescription,
  name,
  photos,
}: Props) => {
  return (
    <View style={{ marginHorizontal: 32, marginTop: 36 }}>
      <Text
        style={{
          fontWeight: "700",
          fontSize: 24,
          lineHeight: 28,
          color: "#1d1d1d",
        }}
      >
        Meet {name}.
      </Text>
      <Text style={[styles.description, { marginTop: 15 }]}>
        {description[0]}
      </Text>
      <Carousel
        style={{ marginTop: 52 }}
        centerContent
        loop
        itemSpacings={8}
        initialPage={Math.floor(photos.length / 2)}
      >
        {photos.map((photo) => (
          <View key={photo} style={{ width: 201 }}>
            <Image
              source={{ uri: photo }}
              style={{ width: 201, height: 261 }}
            />
          </View>
        ))}
      </Carousel>
      <Text
        style={{
          marginTop: 30,
          textAlign: "center",
          fontWeight: "400",
          fontSize: 14,
          lineHeight: 16,
          color: "#888",
        }}
      >
        {galleryDescription}
      </Text>
      <View style={{ gap: 20, marginTop: 46 }}>
        {description.slice(1).map((text, index) => (
          <Text style={styles.description} key={index}>
            {text}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: { fontWeight: "400", fontSize: 20, lineHeight: 25 },
});
