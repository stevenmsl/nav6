import {NavigatorScreenParams} from '@react-navigation/native';

/*#TA-03 nested navigator
  - child navigator
*/
export type TabParamList = {
  AccountBasic: {userId: string} | undefined;
  AccountAdress: {userId: string} | undefined;
  AccountSecurity: {userId: string} | undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam: string} | undefined;
  Profile: {name: string};
  Counter: undefined;
  /* this allows you to go from parent nav to
     child nav ana specify which screen
     you want to go at the same time
     - including "undefined" allows you to go to the
       default screen controlled by chid nav by not
       specifying any screen
  */
  Account: NavigatorScreenParams<TabParamList> | undefined;
};
