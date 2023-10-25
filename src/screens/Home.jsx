import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View className="max-w-[1200px] mx-auto">
        <View className="w-full mx-auto bg-[#F5F7F8] rounded">
          <Image
            className="w-[100px] h-[100px] "
            source={require("../assets/caja.png")}
          ></Image>
        </View>
        <Text className="text-xl my-3 text-center mx-auto bg-[#3D30A2] px-3 text-white rounded py-2">
          La aplicación que hace de todo
        </Text>
        <View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/genero")}>
              <Text className="text-white">Predecir genero</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/edad")}>
              <Text className="text-white">Predecir edad</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/universidad")}>
              <Text className="text-white">Universidades</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/clima")}>
              <Text className="text-white">Clima</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/wordpress")}>
              <Text className="text-white">WordPress</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-[#ED7D31] rounded my-2 py-2 px-1">
            <TouchableOpacity onPress={() => router.push("/acerca")}>
              <Text className="text-white">Acerca de</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
