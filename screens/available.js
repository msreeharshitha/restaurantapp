import React from "react";
import { View, SafeAreaView, Button, StyleSheet } from "react-native";
const Available = () => {
  return (
    <SafeAreaView>
      <View>
        <Button styles={{ color: "red" }} title="1" />
        <Button title="2" />
        <Button title="3" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  deez: {
    color: "red",
    borderRadius: 50,
  },
});

export default Available;
