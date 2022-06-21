import { Text, View, ScrollView } from "react-native";
import tw from "twrnc";
import Layout from "./../components/Layout";
import axios from "../axiosConfig";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Card from "../components/Card";
import { useQuery } from "react-query";
import TaskInput from "../components/TaskInput";
const HomeScreen = () => {
  const [user, loading, error] = useAuthState(auth);

  const {
    isLoading,
    data: todos,
    refetch,
  } = useQuery("todos", async () => {
    const res = await axios.get(`/todo?userEmail=${user.email}`);
    return res.data;
  });

  if (isLoading)
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );

  return (
    <Layout>
      <View style={tw`flex-1`}>
        <TaskInput refetch={refetch} user={user}/>

        <View style={tw`flex-1`}>
          <ScrollView style={tw`p-4`}>
            {todos.map((todo) => {
              return (
                <View key={todo._id}>
                  <Card data={todo} refetch={refetch} />
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </Layout>
  );
};

export default HomeScreen;
