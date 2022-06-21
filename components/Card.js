import {
  View,
  Text,
  ToastAndroid,
  Modal,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import axios from "../axiosConfig";

export default function Card({ data, refetch }) {
  const { _id, title, description, completed } = data;
  const [modalVisible, setModalVisible] = useState(false);
  const taskComplete = async () => {
    try {
      await axios.put(`/todo?todoId=${_id}`, {
        completed: !completed,
      });
      ToastAndroid.show(
        !completed ? "completed 😁" : "not completed 😵",
        ToastAndroid.SHORT
      );
      refetch();
    } catch (err) {
      ToastAndroid.show("😡 Error please try again", ToastAndroid.SHORT);
    }
  };

  const onDelete = async () => {
    const data = {
      todoId: _id,
    };
    try {
      await axios.delete("/todo/one", {
        data: data,
      });
      refetch();
      ToastAndroid.show("Task Deleted 🗑️", ToastAndroid.SHORT);
    } catch (err) {
      console.log(err);
      ToastAndroid.show("😡 Error please try again", ToastAndroid.SHORT);
    }
  };

  return (
    <View style={tw` rounded-md bg-gray-200 p-3 my-2`}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={tw`flex-1 justify-center items-center mt-5 shadow-lg`}>
          <View style={tw`bg-white p-5 rounded-lg items-center`}>
            <Text>Delete?</Text>
            <View style={tw`flex-row items-center justify-center mt-3`}>
              <TouchableOpacity onPress={onDelete} style={tw`mx-2 rounded-lg bg-red-800 px-4 py-2`}>
                <Text style={tw`text-white`}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                setModalVisible(!modalVisible)
              }} style={tw`mx-2 rounded-lg bg-gray-800 px-4 py-2`}>
                <Text style={tw`text-white`}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={tw`flex-row justify-between items-center`}>
        <TouchableOpacity onPress={taskComplete} style={tw`flex-row items-center`}>
          {completed ? (
            <Ionicons name='md-checkmark-circle' size={20} color='green' />
          ) : (
            <View
              style={tw`h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-100`}
            ></View>
          )}

          <Text style={tw`ml-2 font-semibold text-gray-800 w-10/12`}>
            {title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <MaterialCommunityIcons name='delete-empty' size={24} color='brown' />
        </TouchableOpacity>
      </View>
      <View style={tw`border-b border-gray-300 my-2`}></View>
      <View>
        <Text style={tw`text-gray-700`}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
