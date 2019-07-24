import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import naqd from './../naqd/naqd';


const MainNavigator = createStackNavigator({
    Home: {screen: naqd},
});

const App = createAppContainer(MainNavigator);

export default App;