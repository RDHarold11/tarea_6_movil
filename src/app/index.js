import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

import Home from "../screens/Home";

const Page = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Tarea 6",
        }}
      />
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Page;
