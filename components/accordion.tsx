import { ReactNode } from "react";
import { View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type Props = {
  isOpen: SharedValue<boolean>;
  items?: ReactNode;
  children: ReactNode;
};

export const Accordion = ({ isOpen, items, children }: Props) => {
  const height = useSharedValue(0);

  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(isOpen.value), {
      duration: 500,
    })
  );

  const bodyStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));

  return (
    <Animated.View style={[{ width: "100%", overflow: "hidden" }, bodyStyle]}>
      <View
        onLayout={(event) => {
          height.value = event.nativeEvent.layout.height;
        }}
        style={{
          width: "100%",
          position: "absolute",
          display: "flex",
          alignItems: "center",
        }}
      >
        {children}
      </View>
    </Animated.View>
  );
};
