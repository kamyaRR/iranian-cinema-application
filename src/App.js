import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import {I18nManager} from 'react-native';
I18nManager.forceRTL(true);
import React from 'react';

import Artical from './pages/Artical';
import Home from './pages/Home';

import Homefilm from './pages/Film/Homefilm';
import Articalfilm from './pages/Film/Articalfilm';


import didgah from './pages/didgah/indexx';
import naqd from './pages/naqd/indexx';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({
  $textColor: '#0275d8'
});


const icon = <FontAwesome5 name={'comments'} size={20} color={'#fff'}/>;
const icon2 = <FontAwesome5 name={'male'} size={22} color={'#fff'}/>;
const icon3 = <FontAwesome5 name={'pen'} size={17} color={'#fff'}/>;
const icon4 = <FontAwesome5 name={'film'} size={22} color={'#fff'}/>;


const nnavigator = createStackNavigator({
  Home: {screen: Home},
  Artical: {screen:Artical}

});

const nfavigator = createStackNavigator({
 Homefilm: {screen: Homefilm},
  Articalfilm: {screen: Articalfilm}


});

const tabNavigator = createMaterialBottomTabNavigator({

   کارگردان: {
    screen: nnavigator,
    navigationOptions:{
      tabBarIcon:icon2,
        tabBarColor:'#bdc3c7',
   
      }
  },



  فیلم: {
    screen: nfavigator,
    navigationOptions:{
      tabBarIcon: icon4,
      tabBarColor: '#d35400',

    },



  },



  نقد: {
    screen: naqd,
    navigationOptions:{
      tabBarIcon: icon3,
      tabBarColor:'#2ecc71',
    }
  },



  دیدگاه: {
    screen: didgah,
    navigationOptions:{
      tabBarIcon:icon,
        tabBarColor:'#9b59b6',
    }
  },
},

    {
    barStyle: { backgroundColor: '#bdc3c7' },



});
export default createAppContainer(tabNavigator);