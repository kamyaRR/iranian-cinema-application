import {Text, View, StyleSheet} from "react-native";
import React, {Component} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default class film extends Component {
    static navigationOptions = {
        title: 'سینما سی‌نما',
        
        headerStyle: {
            backgroundColor: '#9b59b6',
        },
        headerTitleStyle: {
            fontFamily:'IRANSansMobile_Light',
            fontWeight:"200",
            flex: 1,
            textAlign: 'center'
        },
        headerRight: <View style={{marginRight:15}}>
            <FontAwesome5 name={'comments'} color={'#2d3436'} size={22} />
        </View>

    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center', backgroundColor:'#f19e80', justifyContent:'center'}}>
                <Text>مربوط به بدنه دیدگاه</Text>
            </View>
        )
    }
}