import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Stack } from "expo-router";
import axios from "axios";
import { useRouter } from "expo-router";
/* 
Nombre
Dominio
Link a cada pagina
 */

const Universidad = () => {
  const [value, setValue] = useState("");
  const [colleges, setColleges] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const fetchColleges = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://api.adamix.net/itla/universidades/?pais=${value}`
    );
    setColleges(res.data);
    setLoading(false);
  };
  if (loading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "Universidades" }} />
      <ScrollView>
        <View className="max-w-[1200px] mx-auto">
          <View className="flex-row items-center justify-between gap-2 my-3">
            <TextInput
              placeholder="Ingresa la universidad"
              onChangeText={(text) => setValue(text)}
              className="border-b px-3 w-[66%] text-xl pl-1 py-2"
            />
            <TouchableOpacity
              className="px-3 py-3 rounded bg-[#333]"
              onPress={fetchColleges}
            >
              <Text className="text-white text-xl">Go</Text>
            </TouchableOpacity>
          </View>
          <View className="mt-10">
            {colleges &&
              colleges.map((item) => (
                <View
                  className="bg-[#D0D4CA] rounded py-2 my-2"
                  key={item.name}
                >
                  <Image
                    className="h-[60px] w-[60px] mx-auto"
                    source={require("../assets/gorro.png")}
                  ></Image>
                  <View>
                    <Text className="text-center font-bold my-2">
                      {item.name}
                    </Text>
                    <Text className="text-center">
                      {item.domains.map((i) => i)}
                    </Text>
                    {item.web_pages.map((a) => (
                      <TouchableOpacity
                        key={a}
                        onPress={() => router.push(`${a}`)}
                      >
                        <Text className="text-center underline">{a}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Universidad;
