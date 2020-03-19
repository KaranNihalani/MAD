import React from 'react';
import { Text, View, Button} from 'react-native';

class testSignUp extends React.Component{
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
export default testSignUp;