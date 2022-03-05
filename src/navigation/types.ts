export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam: string} | undefined;
  Profile: {name: string};
  Counter: undefined;
};
