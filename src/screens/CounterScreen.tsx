import React, {useState, useLayoutEffect} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface CounterScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Counter'> {}

const CounterScreen: React.FC<CounterScreenProps> = ({navigation}) => {
  const [count, setCount] = useState(0);
  /*TA-01*/
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button title="+" onPress={() => setCount(c => c + 1)} />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.Screen}>
      <Text>Counter Screen</Text>
      <Text>Count: {count}</Text>
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

export default CounterScreen;
