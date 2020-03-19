/**
 * 
 *
 * Author: Karan Nihalani
 * ID: 17023122
 */

 import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { button } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import SignUpScreen from './screens/SignUpScreen';
import NewPostScreen from './screens/NewPostScreen';
import LoginScreen from './screens/LoginScreen';
import Camera from './screens/Camera';

   
const AppTabNav = createBottomTabNavigator({

    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: SignUpScreen
    },
    Home: {
        screen: HomeScreen
    },
    NewCHIT: {
        screen: NewPostScreen
    },
    About: {
        screen: AboutScreen
    }
});



const AppContainer = createAppContainer(AppTabNav)
export default AppContainer;


