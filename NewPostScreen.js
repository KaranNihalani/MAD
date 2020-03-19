import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class NewPostScreen extends Component {

    constructor (props) {
        super(props);
        this.state = {
            chit_content: ''
        };
    }

    _addChitt(){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
            method: 'POST',
            body: JSON.stringify({
                chit_content: this.state.chit_content
            })
        })
        .then((response) => {
            Alert.alert('New Chitt Added!');
        })
        .catch ((error) => {
            console.error(error);
        });
    } 

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>New Chitt</Text>
                <Image
                source={require('./logo.png')}
                style={{
                    width: 60,
                    height: 60,
                    alignSelf: 'flex-end',
                    marginTop: -7,
                    position: 'absolute'
                 }}
                />
                <Text style={styles.subheading}>What to Chitt about today?</Text>
                <TextInput
                style={styles.newpost}
                placeholder={'Type here...'}
                underlineColorAndroid={'transparent'}
                maxLength = {141}
                />
                <View style={styles.postbutton}>
                <Button
                title={'POST!'}
                onPress={this._addChitt.bind(this)}
                />
                </View>
            </View>
        );
    }
}

export default NewPostScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'rgb(204, 255, 255)'
    },

    header: {
        textAlign: 'left',
        fontSize: 24,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40, 
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    },

    subheading: {
        textAlign: 'left',
        marginTop: 35,
        fontSize: 16,
        fontStyle: 'italic',
        fontFamily: 'arial',
        fontWeight: 'bold'
    },

    newpost: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        padding: 50, 
        borderWidth: 3,
        borderColor: 'black'
    },

    postbutton: {
        position: 'absolute',
        bottom: 200,
        alignSelf: 'center'
    }
});