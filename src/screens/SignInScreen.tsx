import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {signin} from '../services/auth';

const SignInScreen = () => {
  return (
    <View style={styles.Screen}>
      <Text>Sign In Screen</Text>
      <Button
        title="Sign In"
        onPress={() => {
          signin();
        }}
      />
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

export default SignInScreen;
