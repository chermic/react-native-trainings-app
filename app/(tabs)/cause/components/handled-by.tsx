import { Button, Image, Text, View } from "react-native";
import { CauseResponse } from "../use-user";
import EvilIcons from "@expo/vector-icons/EvilIcons";

type Props = {
  handledBy: CauseResponse["handledBy"];
};

export const HandledBy = ({ handledBy }: Props) => {
  return (
    <View>
      <Text>Handled by</Text>
      <View>
        <Image source={{ uri: handledBy.image }} style={{ width: 134 }} />
        <View>
          <View>
            <EvilIcons name="location" size={24} color="black" />
            <Text>{handledBy.location}</Text>
          </View>
          <Text>{handledBy.name}</Text>
          <Button title="Learn more" />
        </View>
      </View>
    </View>
  );
};
