/**
 *
 *
 * Author: Karan Nihalani
 * ID: 17023122
 */

import React, { Component } from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Button, Image } from 'react-native';


class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            chittAppData: []
        }
    }
    
    getData(done){
        return fetch('http://10.0.2.2:3333/api/v0.0.5/chits')
        .then((response) => response.json())
        .then((responseJson) => {

            let res = responseJson;
            // console.log("got data", res[0])
    
            this.setState({
                "isLoading": false,
                "chittAppData": res
            },
            () => {
                done();
            });
            
        })  
        .catch((error) => {
            console.log("Err", error);
        });
    }
    componentDidMount(){
        this.getData(() => {
            console.log("CinnerB", this.state.chittAppData);
        });
    }
    render() {
        if(this.state.isLoading){
            return(
            <View>
                <ActivityIndicator/>
            </View>
            )
        }else{
            console.log("RENDER::", this.state.chittAppData[0].chit_id);
            return(
                <View style={styles.container}>
                    <Text style={styles.header}>Chitts</Text>
                    <Image 
                    source={require('./logo.png')}
                    style={{
                    width: 60,
                    height: 60,
                    alignSelf: 'flex-end',
                    marginTop: -9,
                    position: 'absolute'
                    }}
                    />
                    <FlatList
                    data={this.state.chittAppData}
                    renderItem={({item}) => 
                        <View>
                            <Text style={styles.id}>ID: {item.chit_id}</Text>
                            <Text style={styles.content}>{item.chit_content}</Text>
                            <Text style={styles.timestamp}>Timestamp: {item.timestamp}</Text>
                        </View>}
                    keyExtractor={chit => chit.chit_id}
                    />
                 </View>
            )
        }
    }
}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(204, 255, 255)'
    },

    header: {
        marginBottom: 20,
        color: 'black',
        fontSize: 30,
        textAlign: 'left',
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },

    id: {
        marginTop: 20,
        color: 'red',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    content: {
        marginTop: 5,
        color: 'black',
        alignContent: 'stretch',
        textAlign: 'left',
        fontSize: 24,
        fontStyle: 'italic'
    },

    timestamp: {
        fontSize: 15,
        fontStyle: 'italic'
    }


})
