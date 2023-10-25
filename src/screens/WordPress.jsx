import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, View, Image, ScrollView } from "react-native";
import { Stack } from "expo-router";
import axios from "axios";
import { useRouter } from "expo-router";

const WordPress = () => {
  const [data, setData] = useState([]);
  const orderedData = data ? data.sort((a, b) => b.id - a.id) : [];
  const router = useRouter();

  const fetchData = async () => {
    const res = await axios.get(
      "https://blog.playstation.com/wp-json/wp/v2/posts/?per_page=4"
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerTitle: "Wordpress" }} />
      <ScrollView>
        <View className="max-w-[1200px] mx-auto">
          <View className="w-full">
            <Image
              className="w-[400px] h-[100px] object-contain"
              source={require("../assets/play.png")}
            ></Image>
          </View>
          <View>
            <Text className="text-center font-bold text-xl underline my-10">
              Ultimos posts
            </Text>
            {orderedData?.map((item) => (
              <View key={item.id} className="my-2 px-2">
                <View className="flex-row gap-2">
                  <Image
                    className="w-[40px] h-[40px]"
                    source={require("../assets/blog.png")}
                  ></Image>
                  <View>
                    <Text
                      className="max-w-[300px] underline"
                      onPress={() => router.push(`${item.link}`)}
                    >
                      {item.title.rendered}
                    </Text>
                    <Text className="max-w-[300px]">
                      {item.excerpt.rendered}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WordPress;
