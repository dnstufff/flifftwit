import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Palette } from '../constants/Palette';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Palette.primaryDark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
