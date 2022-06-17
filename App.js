import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import tw from "twrnc";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <View>
        <View style={tw`rounded-lg bg-gray-100 p-4`}>
          <TextInput
            placeholder='Task Title'
            style={tw`rounded-md h-12 w-full px-4 border border-gray-400 bg-white`}
          ></TextInput>
          <TextInput
            placeholder='Description'
            multiline={true}
            style={tw`rounded-md h-24 w-full px-4 pt-2 border border-gray-400 bg-white mt-5`}
          ></TextInput>
          <View style={tw`mt-5 flex items-end`}>
            <Pressable style={tw`px-3 py-3 bg-gray-800 rounded flex justify-center items-center w-4/12`}>
              <Text style={tw`text-white font-semibold`}>CREATE</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Layout>
  );
}
