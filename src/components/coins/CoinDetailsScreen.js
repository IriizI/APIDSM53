// importamos react 
import React, { Component } from 'react';
//importamos componentes nativos
import {View, Text, StyleSheet } from 'react-native';

//declaramos nuestro componente
class CoinDetailsScreen extends Component{
    render(){
        return(
            <View style = {styles.container}>
            <Text> Mi primer pantalla detalle en react native </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "yellow"
    },
});

export default CoinDetailsScreen;