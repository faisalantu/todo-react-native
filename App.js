import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import SignupScreen from "./Screens/SignupSceeen";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name='Login'
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name='Signup'
            component={SignupScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
