import React, {Component} from 'react';
import {View,Text, StyleSheet, Image, Platform, ScrollView } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
import OriStyle from "../assets/style";
export default class Artical extends Component{
    static navigationOptions =({navigation})=>({

        headerTitle:

            <Text style={OriStyle.HeaderTitleStyle}>{navigation.state.params.artical.title}</Text>,


        headerStyle:{
            backgroundColor: '#bdc3c7'
        },



    });

/*
    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={{flex:1,alignItems:'center', backgroundColor:'#abbb80', justifyContent:'center'}}>
                <Text>مربوط به بدنه فیلم</Text>
            </View>
        )
    }
*/

    render() {
        const {image, title, body} = this.props.navigation.state.params.artical;
        return (
            <ScrollView>
                <LinearGradient colors={['#2f3542', '#f1f2f6']} style={styles.main}>
                    <View style={styles.IMcen}>
                    <Image source={image} style={styles.image}/>
                    </View>
                    <View style={styles.textBDView}>
                        <Text style={styles.body}>{body}</Text>
                    </View>
                </LinearGradient>
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    IMcen:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    },

    /* container : {
       // flex : 0.5,
         margin : 5,
        // borderColor:'white',
        // elevation: 1
   },*/
    image: {
        width : '90%',
        height: 300,
},

    body: {
        marginRight: 25,
        lineHeight:30,
        fontFamily: 'IRANSansMobile_Bold'

    },
    textBDView : {
        padding: 10,
        marginLeft:35,

    }
});
