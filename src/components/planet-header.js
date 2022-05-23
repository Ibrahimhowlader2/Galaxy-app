import {StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import Text from './text/text';
import {spacing} from '../theme/spacing';
import {colors} from '../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const PlanetHeader = ({backBtn,title = 'The Planet'}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
        <Pressable
          style={{marginRight: spacing[4]}}
          onPress={() => {
            navigation.goBack();
          }}>
          <AntDesign name="left" style={{color: colors.white, fontSize: 30}} />
        </Pressable>
      )}

          <Text preset="h1">{title}</Text>
    </View>
  );
};

export default PlanetHeader;

const styles = StyleSheet.create({
  container: {
    padding: spacing[4],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
