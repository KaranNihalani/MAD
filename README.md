# Chittr Application 
The Chittr App is an Android-based mobile application, described as a unique and non-plagiarised platform for microblogging. Users who sign up for an account can publish ‘Chits’ – short, textual based posts of no more than 141 characters. Users can also follow their friends and peers to keep updated with what their friends are Chitting about. The application further interacts with a remote RESTful API. 

## Getting Started
The instructions below will be useful as it will allow you to bring up a copy of the project up in your device for your development and testing purposes. 

## Prerequisites
To install the React Native template CLI, there is an online link, where you will be able to follow step-by-step instructions - click here (https://facebook.github.io/react-native/docs/getting-started)
Once you have the React Native CLI working, make sure to create a new directory by navigating to the directory in the command prompt: 
```bash
npx react-native init [your project name]
```
The next step would be to install the extra node modules needed for the project, in the command prompt:
```bash
npm install react-navigation
npm install react-navigation-stack
npm install react-native-gesture-handler
npm i react-native link react-native-safe-area-context
npm i @react-native-community/masked-view
npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
npm install react-navigation-tabs
```
Wait until this is complete. Once this is done, there might be some errors. If that is the case, run it again. 
The node modules are fully installed and you are ready to start viewing the application with Android studio (a full guide on how to install it can be found here (https://facebook.github.io/react-native/docs/getting-started)

## Running Android Studio
To view the functionality of the application, we have to launch the Android Studio AVD. 
Before this, open the project in Android studio: “./[your project name]/android”. Then, click "Tools > AVD Manager". Finally, proceed to set up your emulator. 

## Launching the Application
When launching the application, you will need to install the server required:
```bash
npm install
```
Then, run the server with 
```bash
npm start
```
This should return a message on the terminal screen that says: "Listening on port: 3333"
Once this is done, you are ready to launch the application on your emulator. In the command prompt, type:
```bash 
npx react-native run-android
```
This will load the application on your emulator, ready for your navigation.

## Testing 
When testing for this application, 'jest' was used, which came installed within the node modules itself. 
The command utilised to test snapshots was: 
```bash
npm test
```

## Contributions
The author of this project is not open to contributions.

## Support
Any issues? Make sure to reach out to me.

## Acknowldgements
There are no acknowledgements to be made.

## License
This project doesn't require any license.

