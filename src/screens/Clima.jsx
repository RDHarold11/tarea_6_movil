import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Image } from "react-native";
import { Stack } from "expo-router";
import axios from "axios";

const Clima = () => {
  const [data, setData] = useState({});

  const fetchClima = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo&units=metric&appid=d491a0ff9285e1d3975042bf0c2091eb`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchClima();
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "Estado del clima" }} />
      <View className="max-w-[1200px] mx-auto">
        <View className="bg-[#D2E3C8] my-10 h-[400px] w-[300px] items-center justify-center">
          <View>
            <View>
              <Image
                className="h-[90px] w-[90px] mx-auto"
                source={{
                  uri: `https://openweathermap.org/img/wn/${
                    data.weather ? data.weather[0].icon : null
                  }@2x.png`,
                }}
              ></Image>
            </View>
            <Text className="font-bold text-3xl text-center">
              {data.main ? data.main.temp : null}°C
            </Text>
            <Text className="text-xl my-2 text-center">{data.name}</Text>
            <View className="flex-row gap-2 my-1">
              <Text className="font-bold">Viento:</Text>
              <Text>{data.main ? data.wind.speed : null}mph</Text>
            </View>
            <View className="flex-row my-1">
              <Text className="font-bold mr-2">Humedad:</Text>
              <Text>{data.main ? data.main.humidity : null}%</Text>
            </View>
            <View className="flex-row my-1">
              <Text className="font-bold mr-2">Temperatura maxima:</Text>
              <Text>{data.main ? data.main.temp_max : null}%</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Clima;
