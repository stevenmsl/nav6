import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, StyleSheet, View, Button} from 'react-native';
import {RootStackParamList} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/*#TA-06 useNavigation
   - define the navigation props type using NativeStackNavigationProp
*/
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const AccountSecuirtyScreen = () => {
  /*#TA-06 */
  const navigation = useNavigation<NavigationProps>();
  return (
    <View style={styles.Screen}>
      <Text>Account Security Screen</Text>
      <Button
        title="Go Home"
        onPress={() => {
          /*TA-06 */
          navigation.navigate('Home');
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

export default AccountSecuirtyScreen;
