import React, {Component} from 'react';
import {View,Text, StyleSheet, Image, Platform, Dimensions, TouchableNativeFeedback } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
export default class Artfilm extends Component{

    render(){
        const { image, title, body }=this.props;
        const {navigate}=this.props.navigation;
        return(

            <TouchableNativeFeedback onPress={()=> navigate('Articalfilm', {
                articalfilm:{
                    title, image, body
                }
            })}>
                <View style={styles.container}>
                    <LinearGradient colors={['#f1c40f','#c0392b']} style={styles.main}>
                        <Text style={styles.title}>{title}</Text>
                        <Image source={image} style={styles.image}/>
{/*
                        <View style={styles.textBDView}>
                            <Text numberOfLines={5} style={styles.body}>{body}</Text>
                        </View>*/}
                    </LinearGradient>
                </View>
            </TouchableNativeFeedback>
        )
    }
}
const {width,height}=Dimensions.get('window');
const gutter=10;
const styles=StyleSheet.create({
    container : {

        /*width: (width-gutter)/8,*/
        flex : 0.25,
        margin : 5,
        //borderColor:'#e67e22',
        elevation: 1


    },
    image: {

        height: 80,
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontFamily: 'IRANSansMobile_Light',
        fontSize: 6,
        marginRight: 25,
        color: '#192a56',
        height:14,
        display: 'flex',
        //justifyContent:  'center',
        flexDirection:'column',
        /*textAlign: 'center',
        alignItems: 'center'*/

    },
    body: {
        marginRight: 25

    },

});
