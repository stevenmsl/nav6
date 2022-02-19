import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface HomeScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Home'> {}

const HomeScreen: React.FC<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  return (
    <View style={styles.Screen}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details');
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
export default HomeScreen;
