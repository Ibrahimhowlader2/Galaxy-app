import {StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import { colors } from '../theme/colors';

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
          <PlanetHeader backBtn={true} />
          <Text>
              Details
          </Text>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
      },
});
