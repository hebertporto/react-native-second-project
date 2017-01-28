import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
      apiKey: 'AIzaSyDqCXvaTnsUnjO9cSp7N9AnoGa_BUlixAo',
      authDomain: 'auth-88835.firebaseapp.com',
      databaseURL: 'https://auth-88835.firebaseio.com',
      storageBucket: 'auth-88835.appspot.com',
      messagingSenderId: '17945973133'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
 renderContent() {
   switch (this.state.loggedIn) {
     case true:
       return (
         <CardSection>
           <Button onPress={() => firebase.auth().signOut()}>
             Log Out
           </Button>
         </CardSection>
       );
     case false:
      return <LoginForm />;
     default:
      return <Spinner size="large" />; // wrap in a View tag e centralizar na tela
   }
 }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
