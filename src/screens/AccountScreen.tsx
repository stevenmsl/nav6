import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AccountBasicScreen from './AccountBasicScreen';
import AccountAddressScreen from './AccountAddressScreen';
import AccountSecuirtyScreen from './AccountSecuirtyScreen';

interface AccountScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Account'> {}
/*#TA-06 */
const Tab = createBottomTabNavigator();
const AccountScreen: React.FC<AccountScreenProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AccountBasic" component={AccountBasicScreen} />
      <Tab.Screen name="AccountAdress" component={AccountAddressScreen} />
      <Tab.Screen name="AccountSecurity" component={AccountSecuirtyScreen} />
    </Tab.Navigator>
  );
};

export default AccountScreen;
