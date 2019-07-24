import React, {Component} from 'react';
import {View,Text, StyleSheet, Image, Platform, Dimensions, TouchableNativeFeedback } from 'react-native'
import LinearGradient from "react-native-linear-gradient";
export default class Art extends Component{

  render(){
    const { image, title, body, Engtitle }=this.props;
    const {navigate}=this.props.navigation;
    return(

        <TouchableNativeFeedback onPress={()=> navigate('Artical', {
            artical:{
                title, image, body, Engtitle
            }
        })}>
          <View style={styles.container}>
            <LinearGradient colors={['#2f3542','#f1f2f6']} style={styles.main}>
                     <Text style={styles.title}>{title}</Text>
                     <Image source={image} style={styles.image}/>

                <View style={styles.textBDView}>
                 <Text style={styles.Engtitle}>{Engtitle}</Text>
                </View>
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
    flex : 0.5,
    margin : 5,
    borderColor:'white',
    elevation: 1


  },
  image: {
    width : '100%',
    height: 200
  },
  title: {
    
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'iransans',
    fontSize: 20,
    marginRight: 15,
      color: 'white'
  },
  Engtitle: {
    color: '#2c3e50',
    fontSize: 12
  },

  textBDView : {
    padding: 10
  }
  
});
 /* body: {
    marginRight: 25

  }, */