import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

import type {CompositeScreenProps} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, TabParamList} from '../navigation/types';

/*#TA05 combine with parent navigator props
  - this allows you to navigate back to parent
*/
type AccountBasicScreenProps = CompositeScreenProps<
  /* child */
  BottomTabScreenProps<TabParamList, 'AccountBasic'>,
  /* parent */
  NativeStackScreenProps<RootStackParamList>
>;

const AccountBasicScreen: React.FC<AccountBasicScreenProps> = ({
  navigation,
  route,
}) => {
  return (
    <View style={styles.Screen}>
      <Text>
        Account Basic for{' '}
        {route.params?.userId ? route.params.userId : 'unknown user'}
      </Text>
      <Button
        title="Go Home"
        onPress={() => {
          /*TA-05 */
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

export default AccountBasicScreen;
