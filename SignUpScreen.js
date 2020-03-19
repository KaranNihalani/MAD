/**
 *
 *
 * Author: Karan Nihalani
 * ID: 17023122
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

class SignUpScreen extends Component {

    // Registering (){
    //     alert('Signed in! Go to Home to view Chitts!');
    // }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.heading}>Register with Chittr</Text>

                <TextInput style={styles.inputDetails} 
                placeholder="First Name"
                underlineColorAndroid={'transparent'} 
                />
                <TextInput style={styles.inputDetails} 
                placeholder="Surname"
                underlineColorAndroid={'transparent'} 
                />
                <TextInput style={styles.inputDetails} 
                placeholder="Username"
                underlineColorAndroid={'transparent'} 
                />
                <TextInput style={styles.inputDetails}
                placeholder="Age"
                underlineColorAndroid={'transparent'}
                />
                <TextInput style={styles.inputDetails}
                placeholder="Create password (must include a number)"
                />
                <TextInput style={styles.inputDetails}
                placeholder="Repeat password"
                secureTextEntry={true}
                />
                <View style={styles.rbutton}>
                    <Button style={styles.rbutton}
                    title = "Register Me" 
                    onPress= {
                        () => this.props.navigation.navigate('Home')}
                        //OnPress={this.onRegistering.bind(this)}
                    />
                <Image
                source={require('./logo.png')}
                style={{
                    width: 120,
                    height: 150,
                    marginRight: 12,
                    marginBottom: 12,
                    marginTop: 12}}
                />
                </View>
            </ScrollView>
        )
    }
}

export default SignUpScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'rgb(204, 255, 255)',
        alignSelf: 'stretch'
        
    },

    heading: {
        fontSize: 24,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40, 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },

    inputDetails: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: 'blue',
        borderBottomWidth: 1
    },

    rbutton: {
        justifyContent: 'center',
        alignItems: 'center'
    }

});
