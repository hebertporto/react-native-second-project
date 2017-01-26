import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDqCXvaTnsUnjO9cSp7N9AnoGa_BUlixAo',
    authDomain: 'auth-88835.firebaseapp.com',
    databaseURL: 'https://auth-88835.firebaseio.com',
    storageBucket: 'auth-88835.appspot.com',
    messagingSenderId: '17945973133'
  });
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
