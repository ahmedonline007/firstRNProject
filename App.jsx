import {StyleSheet, Text, View} from 'react-native';
import React, {createContext} from 'react';
import Home from './src/screens/Home';
import CreateEmplyee from './src/screens/CreateEmplyee';
import Profile from './src/screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import {reducer} from './src/reducers/reducer';

//const store = createStore(reducer);
const Stack = createNativeStackNavigator();

const myContext = createContext();

const options = {
  title: 'My Sweet Home',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen
            name="Create"
            component={CreateEmplyee}
            options={{...options, title: 'Create Employee'}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{...options, title: 'Profile'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
