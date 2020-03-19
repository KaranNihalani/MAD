import React from 'react';
import { Text, View, Button} from 'react-native';

class testNewPost extends React.Component{
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
        </View>
        );
    }
}
export default testNewPost;