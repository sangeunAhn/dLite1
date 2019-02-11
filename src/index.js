import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Navigation} from 'react-native-navigation';

Navigation.registerComponent('darr.App', () => App);

Navigation.startSingleScreenApp({
screen:{
    screen: 'darr.App',
    title: "Welcome",
    navigatorStyle:{
        navBarHidden: false,

    },
    navigatorButtons:{}
}

});