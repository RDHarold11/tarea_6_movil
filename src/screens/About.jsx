import React from 'react'
import { Text, ScrollView, SafeAreaView, Image, View } from 'react-native'
import { Stack} from 'expo-router'

const About = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{headerTitle: "Acerca de"}}/>
      <View className="max-w-[1200px] mx-auto">
      <View className="my-10">
        <Image className="w-[120px] h-[120px] mx-auto my-2" source={require("../assets/foto.jpg")}></Image>
        <Text className="font-bold">Harold Manuel Aquino Peralta</Text>
        <Text className="text-center">2021-1965</Text>
        <Text>aquinoharold460@gmail.com</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default About