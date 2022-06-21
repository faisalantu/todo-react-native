import { View, Text, TextInput, TouchableOpacity,ToastAndroid } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import axios from "../axiosConfig";
export default function TaskInput({ refetch,user }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = async () => {
    const data = {
      title: title,
      description: description,
      userEmail: user?.email,
      displayName: user?.displayName,
    };

    try {
      const res = await axios.post("/todo", data);
      setTitle("");
      setDescription("");
      ToastAndroid.show("Task Added", ToastAndroid.SHORT);
      refetch();
    } catch (err) {
      ToastAndroid.show("😡 Error please try again", ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <View style={tw`rounded-lg bg-gray-100 p-4`}>
        <TextInput
          placeholder='Task Title'
          style={tw`rounded-md h-12 w-full px-4 border border-gray-200 bg-white`}
          onChangeText={(text) => {
            setTitle(text);
          }}
          value={title}
        ></TextInput>
        <TextInput
          placeholder='Description'
          multiline={true}
          style={tw`rounded-md h-24 w-full px-4 pt-2 border border-gray-200 bg-white mt-5`}
          onChangeText={(text) => {
            setDescription(text);
          }}
          value={description}
        ></TextInput>
        <View style={tw`mt-5 flex items-end`}>
          <TouchableOpacity
            onPress={submitHandle}
            style={tw`px-3 py-3 bg-gray-800 rounded flex justify-center items-center w-4/12`}
          >
            <Text style={tw`text-white font-semibold`}>CREATE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
