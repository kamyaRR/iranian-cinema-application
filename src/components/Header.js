import React, {Component} from 'react' ;
import {View,Text, StyleSheet} from 'react-native';
export default class Header extends Component{
    render(){
        return(
            <View style={styles.ViewHeader}>
                <Text style={styles.TextHeader}>مجله سینما</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    ViewHeader : {
        alignItems: 'center',
        backgroundColor: '#2f3640',
        justifyContent: 'center',
        height: 50
    },
    TextHeader : {
        fontSize: 20,
        color: 'white',
        fontFamily:'iransans_bold',

    }
})