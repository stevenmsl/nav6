import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/types';

interface ProfileScreenProps
  extends NativeStackScreenProps<RootStackParamList, 'Profile'> {}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  return (
    <View style={styles.Screen}>
      <Text>Profile Screen</Text>
      {/*TA-02*/}
      <Button
        title="update the title"
        onPress={() => {
          navigation.setOptions({title: 'updated'});
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

export default ProfileScreen;
