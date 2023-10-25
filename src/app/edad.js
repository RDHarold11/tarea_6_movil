import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import axios from "axios";

const edad = () => {
  const [age, setAge] = useState("");
  const [value, setValue] = useState("");

  const fetchAge = async () => {
    try {
      const res = await axios.get(`https://api.agify.io/?name=${value}`);
      setAge(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Determinar la edad",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="max-w-[1200px] mx-auto">
          <View className="flex-row items-center justify-between gap-2 my-3">
            <TextInput
              placeholder="Ingresa un nombre"
              onChangeText={(text) => setValue(text)}
              className="border-b px-3 w-[66%] text-xl pl-1 py-2"
            />
            <TouchableOpacity
              className="px-3 py-3 rounded bg-[#333]"
              onPress={fetchAge}
            >
              <Text className="text-white text-xl">Go</Text>
            </TouchableOpacity>
          </View>
          <View>
            {age && value && (
              <View className="bg-[#F875AA]">
                <Text className="text-white text-center text-xl px-2 py-4">
                  {age.age}
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default edad;
