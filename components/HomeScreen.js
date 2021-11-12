import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors";

function HomeScreen(props) {
  return (
    <View style={StyleSheet.container}>
      <SafeAreaView>
        <View style={StyleSheet.container}>
          <Image
            source={require("../assets/images/profile.png")}
            style={style.profileImage}
          />
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({});

export default HomeScreen;
