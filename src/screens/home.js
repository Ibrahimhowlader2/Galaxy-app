import {
  StyleSheet,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React from 'react';
import Text from '../components/text/text';
import PlanetHeader from '../components/planet-header';
import {colors} from '../theme/colors';
import {PLANET_LIST} from '../data/planet-list';
import {spacing} from '../theme/spacing';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <FlatList
        contentContainerStyle={styles.list}
        keyExtractor={(item, index) => item.name}
        data={PLANET_LIST}
        renderItem={({item, index}) => {
          const {name, color} = item;
          return (
            <>
              <Pressable
                onPress={() => {
                  navigation.navigate('Details');
                }}
                style={styles.item}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <View style={[styles.circle, {backgroundColor: color}]} />
                  <Text preset="h4" style={[styles.itemName]}>
                    {name}
                  </Text>
                </View>
                <AntDesign
                  name="right"
                  style={{color: colors.white, fontSize: 18}}
                />
              </Pressable>
            </>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  list: {
    padding: spacing[4],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: spacing[4],
  },
  itemName: {
    textTransform: 'uppercase',
    marginLeft: spacing[4],
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5,
  },
});
