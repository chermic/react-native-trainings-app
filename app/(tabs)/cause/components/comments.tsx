import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Carousel from "react-native-ui-lib/carousel";
import { CauseResponse } from "../use-user";

type Props = {
  comments: CauseResponse["comments"];
};

// TODO move all currency formatters in utils
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Comments = ({ comments }: Props) => {
  return (
    <View style={{ marginTop: 46, marginHorizontal: 32 }}>
      <Text style={{ fontWeight: "700", fontSize: 24, lineHeight: 28 }}>
        What people say
      </Text>
      <Carousel style={{ marginTop: 22 }} centerContent horizontal>
        {comments.map((comment, index) => (
          <View>
            <View
              key={index}
              style={{
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "#D9D9D9",
                borderRadius: 25,
                paddingHorizontal: 22,
                paddingVertical: 16,
              }}
            >
              <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
                <Text style={{ flex: 1 }}>{comment.text}</Text>
                <View>
                  <FontAwesome5
                    name="heart"
                    size={24}
                    color="black"
                    style={{
                      backgroundColor: comment.liked ? "red" : "transparent",
                    }}
                  />
                  <Text>{comment.likesCount}</Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 22,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
                >
                  <View style={{ flexDirection: "row", gap: 2 }}>
                    {comment.replies.avatars.map((avatar) => (
                      <View key={avatar}>
                        <Image
                          source={{ uri: avatar }}
                          style={{ width: 24, height: 24, borderRadius: 50 }}
                        ></Image>
                      </View>
                    ))}
                  </View>
                  <Text
                    style={{
                      fontWeight: "400",
                      fontSize: 16,
                      lineHeight: 18,
                      color: "#888",
                    }}
                  >
                    {comment.replies.count} replies
                  </Text>
                </View>
                <TouchableHighlight
                  style={{
                    backgroundColor: "#ddd",
                    borderRadius: 50,
                    width: 116,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    height: 44,
                    gap: 6,
                  }}
                >
                  <>
                    <MaterialCommunityIcons
                      name="arrow-right-top"
                      size={24}
                      color="black"
                    />
                    <Text
                      style={{
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 18,
                        color: "#000",
                      }}
                    >
                      Reply
                    </Text>
                  </>
                </TouchableHighlight>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                gap: 8,
                marginTop: 12,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: comment.author.avatar }}
                style={{ width: 24, height: 24, borderRadius: 50 }}
              />
              <Text>
                {comment.author.name} -{" "}
                {currencyFormatter.format(comment.author.donation)}
              </Text>
            </View>
          </View>
        ))}
      </Carousel>
    </View>
  );
};
