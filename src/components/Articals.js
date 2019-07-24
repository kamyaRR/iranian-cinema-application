import React, {Component} from 'react';
import Art from './../components/Art';
import {View, ScrollView, StyleSheet, FlatList, StatusBar} from 'react-native';
export default class Articals extends Component{
  _renderFlatListArtical(artical){
  return <Art navigation={this.props.navigation} image={artical.imageUrl} title={artical.title} body={artical.body} Engtitle={artical.Engtitle}/>
}
  render(){
    return(
        <View style={{ flex : 1 }}>

        <FlatList
            data={this.props.articals}
            renderItem={({item})=>this._renderFlatListArtical(item)}
            keyExtractor={(item, index)=>index}
            numColumns={2}

        />
        </View>
    )
  }
}
const styles=StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'

  }
});
