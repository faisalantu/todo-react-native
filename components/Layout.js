import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  StatusBar as RnStatusBar,
} from "react-native";
import tw from "twrnc";

const Layout = ({ children }) => {
  return (
    <View style={tw`p-2`}>
      <View style={styles.statusBarStyle}>
        <StatusBar />
      </View>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  statusBarStyle: {
    height: RnStatusBar.currentHeight,
    width: "100%",
    backgroundColor: "auto",
  },
});

export default Layout;
