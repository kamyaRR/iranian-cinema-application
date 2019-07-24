import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import didgah from './../didgah/didgah'


const MainNavigator = createStackNavigator({
    Home: {screen: didgah},
});

const App = createAppContainer(MainNavigator);

export default App;