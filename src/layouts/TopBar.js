import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TopBar = ({ onSettingsPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Trending Repos</Text>
        {Platform.OS === 'web' && (
          <TouchableOpacity onPress={onSettingsPress} style={styles.iconContainer}>
            <MaterialIcons name="settings" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    width: '100%',
    paddingTop: Platform.OS === 'web' ? 10 : 0,
    height: Platform.OS === 'web' ? 60 : 80,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    flex: 1,
    marginTop: Platform.OS === 'web' ? 0 : 30,
  },
  iconContainer: {
    padding: 5,
  },
});

export default TopBar;
