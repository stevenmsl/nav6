import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const AccountSecuirtyScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text>Account Security Screen</Text>
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

export default AccountSecuirtyScreen;
