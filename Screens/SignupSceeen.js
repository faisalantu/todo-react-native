import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import auth from "../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigation = useNavigation();

  const [
    createUserWithEmailAndPassword,
    passwordAuthUser,
    passowrdAuthLoading,
    passwordAuthError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);

  useEffect(() => {
    if (user) {
      navigation.navigate("Home");
    }
  }, [user]);

  const handleSignup = async () => {
    if (password === password2) {
      if (password.length > 5) {
        createUserWithEmailAndPassword(email, password).then(() => {
          updateProfile({
            displayName: fname,
          });
          ToastAndroid.show("🥳  You are a member now", ToastAndroid.SHORT);
        });
      }
      else{
        ToastAndroid.show("🔑 password should be more than 6 charecter", ToastAndroid.SHORT);
      }
    }else{
      ToastAndroid.show("😡 Password are not same", ToastAndroid.SHORT);
    }
  };

  return (
    <KeyboardAvoidingView style={tw`px-10 py-2`}>
      <StatusBar />
      <View style={tw`justify-center h-full`}>
        <TextInput
          style={tw`rounded-md h-12 w-full px-4 bg-white`}
          placeholder='Full Name'
          onChangeText={(text) => {
            setFname(text);
          }}
        />
        <TextInput
          style={tw`rounded-md h-12 w-full px-4 bg-white mt-5`}
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
        <TextInput
          style={tw`rounded-md h-12 w-full px-4 bg-white mt-5`}
          placeholder='confirm password'
          secureTextEntry
          onChangeText={(text) => {
            setPassword2(text);
          }}
        />
        <View style={tw`mt-5 items-center`}>
          <TouchableOpacity
            onPress={handleSignup}
            style={tw`px-3 py-3 rounded-lg flex justify-center w-8/12 items-center bg-gray-700 border my-5`}
          >
            <Text style={tw`text-white font-semibold`}>REGISTER</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={tw`px-3 py-3 rounded-lg flex justify-center w-8/12 items-center border border-gray-800 mt-5`}
          >
            <Text style={tw`font-semibold`}>ALREADY USER?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;
