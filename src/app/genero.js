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

const genero = () => {
  const [genre, setGenre] = useState("");
  const [value, setValue] = useState("");

  const fetchGenre = async () => {
    try {
      const res = await axios.get(`https://api.genderize.io/?name=${value}`);
      setGenre(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerTitle: "Determinar el genero",
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
              onPress={fetchGenre}
            >
              <Text className="text-white text-xl">Go</Text>
            </TouchableOpacity>
          </View>
          <View>
            {genre &&
              value &&
              (genre.gender == "female" ? (
                <View className="bg-[#F875AA]">
                  <Text className="text-white px-2 py-4">Femenino</Text>
                </View>
              ) : (
                <View className="bg-[#00A9FF]">
                  <Text className="text-white px-2 py-4">Masculino</Text>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default genero;
