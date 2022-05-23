import {StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {colors} from './src/theme/colors';
import {spacing} from './src/theme/spacing';
import {typography} from './src/theme/typography';
import Text from './src/components/text/text';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tb: {
    fontSize: 30,
    fontFamily: typography.primary,
  },
});
