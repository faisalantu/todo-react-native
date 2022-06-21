import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import axios from "../axiosConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { StackActions, useNavigation  } from "@react-navigation/native";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigation()
  const [
    signInWithEmailAndPassword,
    passwordAuthUser,
    passwordAuthLoading,
    passwordAuthError,
  ] = useSignInWithEmailAndPassword(auth);


  useEffect(() => {
    if (user) {
      navigation.dispatch(StackActions.replace('Home'));
      // navigation.navigate("Home");
    }
  }, [user]);

  const handleSignin = async () => {
    await signInWithEmailAndPassword(email, password); 
  };

  return (
    <KeyboardAvoidingView style={tw`px-10 py-2`}>
      <StatusBar />
      <View style={tw`justify-center h-full`}>
        <TextInput
          style={tw`rounded-md h-12 w-full px-4 bg-white`}
          placeholder='email'
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          style={tw`rounded-md h-12 w-full px-4 bg-white mt-5`}
          placeholder='password'
          secureTextEntry
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <View style={tw`mt-5 items-center`}>
          <TouchableOpacity
            onPress={handleSignin}
            style={tw`px-3 py-3 rounded-lg flex justify-center w-8/12 items-center bg-gray-700 border my-5`}
          >
            <Text style={tw`text-white font-semibold`}>SIGNIN</Text>
          </TouchableOpacity>

          {/* <View style={tw` flex-row items-center`}>
            <Text>or signin with</Text>
            <TouchableOpacity
            onPress={()=>{
              console.log("first")
              signInWithGoogle()
            }}
              style={tw`p-3 rounded-full justify-center w-12 h-12 items-center bg-gray-700 ml-5`}
            >
              <Text style={tw`text-white font-semibold`}>G</Text>
            </TouchableOpacity>
          </View> */}

          <TouchableOpacity
          onPress={()=>{
            navigation.navigate("Signup");
          }}
            style={tw`px-3 py-3 rounded-lg flex justify-center w-8/12 items-center border border-gray-800 mt-5`}
          >
            <Text style={tw`font-semibold`}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
