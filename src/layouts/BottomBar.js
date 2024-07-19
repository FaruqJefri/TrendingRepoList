import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BottomBar = ({ selectedTab, onTabPress }) => {
  const handleTabPress = (tab) => {
    if (selectedTab !== tab) {
      onTabPress(tab);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handleTabPress("trending")}
        style={styles.tab}
      >
        <MaterialIcons
          name="star"
          size={24}
          color={selectedTab === "trending" ? "lightblue" : "darkgrey"}
        />
        <Text
          style={{
            color: selectedTab === "trending" ? "lightblue" : "darkgrey",
          }}
        >
          Trending
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
      >
        <MaterialIcons
          name="settings"
          size={24}
          color={selectedTab === "settings" ? "lightblue" : "darkgrey"}
        />
        <Text
          style={{
            color: selectedTab === "settings" ? "lightblue" : "darkgrey",
          }}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  tab: {
    alignItems: "center",
  },
});

export default BottomBar;
