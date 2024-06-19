import { ThemedView } from "@/components/ThemedView";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "./use-user";
import { HorizontalSeparator } from "./components/horizontal-separator";
import { Donations } from "./components/dontations";
import { Header } from "./components/header";
import { CauseCarousel } from "./components/cause-carousel";
import { MainContent } from "./components/main-content";
import { ScrollView } from "react-native-gesture-handler";
import { PersonDescription } from "./components/person-description";
import { Comments } from "./components/comments";
import { HandledBy } from "./components/handled-by";

export default function Cause() {
  const { data, isLoading } = useUser();

  if (isLoading || data === null) {
    return null;
  }

  const { cause, comments, handledBy, person } = data;

  return (
    <ThemedView>
      <SafeAreaView>
        <ScrollView>
          <Header isPicked={cause.picked} />

          <CauseCarousel imageUlr={cause.mainImage} />

          <MainContent
            age={person.age}
            donatorsCount={cause.donators.count}
            firstName={person.name}
            needs={cause.needs}
          />

          <HorizontalSeparator
            styles={{ marginTop: 10, marginHorizontal: 36 }}
          />
          <Donations raised={cause.raised} goal={cause.goal} />
          <HorizontalSeparator
            styles={{ marginTop: 24, marginHorizontal: 36 }}
          />
          <PersonDescription
            name={person.name}
            photos={cause.photos}
            galleryDescription={cause.photosDescription}
            description={cause.description}
          />
          <Comments comments={comments} />

          <HandledBy handledBy={handledBy} />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
