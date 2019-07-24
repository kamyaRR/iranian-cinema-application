import React, {Component} from 'react';
import Art from './../Film/Artfilm';
import {View, ScrollView, StyleSheet, FlatList, StatusBar} from 'react-native';
export default class Articals extends Component{
    _renderFlatListArticalfilm(articalfilm){
        return <Art navigation={this.props.navigation} image={articalfilm.imageUrl} title={articalfilm.title} body={articalfilm.body}/>
    }
    render(){
        return(
            <View style={styles.container}>

                <FlatList
                    data={this.props.articalsfilm}
                    renderItem={({item})=>this._renderFlatListArticalfilm(item)}
                    keyExtractor={(item, index)=>index}
                    numColumns={4}

                />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container :{
        flex: 1,
        // flexDirection: 'row',
        // flexWrap: 'wrap',

    }
});
