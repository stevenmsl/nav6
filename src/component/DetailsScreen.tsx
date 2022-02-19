import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;
