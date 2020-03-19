/**
 *
 *
 * Author: Karan Nihalani
 * ID: 17023122
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class aboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require('./logo.png')} /> 
                </View>
                <Text style={styles.aboutHeader}>About Chittr</Text> 
                <Text style={styles.description}>Chittr is a unique platform for microblogging. Users are able to publish 'Chits' 
                    with a maximum of 141 characters. Users are also able to follow their friends and peers
                    to keep updated with what their friends are 'chitting' about. </Text>
            </View>


        );
    }
}

export default aboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(204, 255, 255)'
    },
    aboutHeader: {
        color: 'black',
        textAlign: 'left',
        fontSize: 30,
        fontWeight: 'bold'
    },
    logoContainer: {
        alignItems: 'center',
    },
    description:{
        color: 'black',
        fontSize: 16,
        textAlign: 'left'
    }

})
