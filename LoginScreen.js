/**
 * 
 *
 * Author: Karan Nihalani
 * ID: 17023122
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const userData = {username: 'karan', password: 'password12345'}


class loginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }
    render(){
        // fetch ('http://10.0.2.2:3333/api/v0.0.5/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //     headers: {
        //         'content-type': 'application/json',
        //         'X-Authorization': //token
        //     }
        // })
        // })
        return(
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                    style={styles.logo}
                    source={require('./logo.png')} />
                </View>
                <Text style={styles.welcome}>Welcome To Chittr!</Text>
                <TextInput
                style={styles.parameter}
                placeholder={'Username'}
                onChangeText={(username) => this.setState({username})}
                value={this.state.username}
                />
                <TextInput
                style={styles.parameter}
                placeholder={'Password'}
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                />
                <Button
                title={'Log In'}
                style={styles.login}
                onPress={this._funclogin}
                />
                <Text style={styles.rquestion}>Not registered yet? Click the button below</Text>
                <Button
                title={'Register'}
                style={styles.login}
                onPress={
                    () => this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }

    _funclogin = async () => {
        if(userData.username === this.state.username && userData.password === this.state.password) {
            //alert('Successfully logged in!');
            this.props.navigation.navigate('Home')
        } else {
            alert ('Invalid username or password');
        }
    }
}
export default loginPage;
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(204, 255, 255)'
    },

    parameter: {
        width: 200,
        height: 50,
        padding: 10,
        borderWidth: 3,
        borderColor: 'blue',
        marginBottom: 10
    },

    login: {
        marginTop: 170,
        justifyContent: 'center',
        marginHorizontal: 30,
        marginBottom: 30,
        height: 40,
        alignItems: 'baseline'
    },

    rquestion: {
        marginTop: 20,
        marginHorizontal: 30,
        justifyContent: 'center'
    },
    
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    logo: {
         height: 300,
         width: 300
    },

    welcome: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        fontFamily: 'Arial',
        height: 50
    }
})



