import { useState } from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },

          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} demension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} demension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContentScreen}>
          <Welcome
            userName="Goodnews"
            welcomeMessage="Find Your Perfect Job"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />

          <Popularjobs headerTitle="Popular Jobs" headerBtn="Show" />
          <Nearbyjobs headerTitle="Nearby Jobs" headerBtn="Show" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : "",
  },

  mainContentScreen: {
    flex: 1,
    padding: SIZES.medium,
  },
});
