import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {TabParamList} from '../navigation/types';

/* you don't need to use CompositeScreenProps to
  combine with parent navigator props if you don't
  need to navigate back to the screens controlled
  by the parent navigator
*/

type AccountAddressScreenProps = BottomTabScreenProps<
  TabParamList,
  'AccountAdress'
>;

const AccountAddressScreen: React.FC<AccountAddressScreenProps> = ({route}) => {
  return (
    <View style={styles.Screen}>
      <Text>
        Account Address for{' '}
        {route.params?.userId ? route.params.userId : 'unknown user'}
      </Text>
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

export default AccountAddressScreen;
