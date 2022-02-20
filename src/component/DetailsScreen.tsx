import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface DetailsScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Details'> {}
const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.Screen}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to the first screen in stack"
        onPress={() => navigation.popToTop()}
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

export default DetailsScreen;
