import { View, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";

export default function Card() {
  return (
    <View style={tw` rounded-md bg-gray-200 p-3 my-2`}>
      <View style={tw`flex-row justify-between items-center`}>
        <View style={tw`flex-row items-center`}>
          {/* <Ionicons name='md-checkmark-circle' size={24} color='green' /> */}
          <View
            style={tw`h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-100`}
          ></View>
          <Text style={tw`ml-2 font-semibold text-gray-800 w-10/12`}>
            Title here TODO
          </Text>
        </View>
        {/* <Entypo name='circle-with-cross' size={24} color='#F24C4C' /> */}
        <MaterialCommunityIcons name='delete-empty' size={24} color='black' />
      </View>
      <View style={tw`border-b border-gray-300 my-2`}></View>
      <View>
        <Text style={tw`text-gray-700`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit iste
          corrupti placeat. Voluptatem nobis illo illum facilis aliquid, ipsa
          animi.
        </Text>
      </View>
    </View>
  );
}
