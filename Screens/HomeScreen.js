import { Text, View, TextInput, Pressable } from "react-native";
import tw from "twrnc";
import Layout from "./../components/Layout";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const HomeScreen = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user.email);
  return (
    <Layout>
      <View>
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
              <Pressable
                style={tw`px-3 py-3 bg-gray-800 rounded flex justify-center items-center w-4/12`}
              >
                <Text style={tw`text-white font-semibold`}>CREATE</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
