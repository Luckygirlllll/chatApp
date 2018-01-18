
  import React, {Component} from 'react';
  import {Provider} from 'react-redux';
  import {createStore, applyMiddleware} from 'redux';
  import firebase from 'firebase';
  import ReduxTHunk from 'redux-thunk';
  import reducers from './src/reducers';
  import Router from './src/Router';


  class App extends Component {

      componentWillMount(){
        const config = {
          apiKey: 'AIzaSyDCQXyFF6QSqGqqUp0unw2GtpPC51hYc6U',
          authDomain: 'manager-a62b7.firebaseapp.com',
          databaseURL: 'https://manager-a62b7.firebaseio.com',
          storageBucket: 'manager-a62b7.appspot.com',
          messagingSenderId: '941428923499'
        };
        firebase.initializeApp(config);


      }

      render(){

      const store = createStore(reducers, {}, applyMiddleware(ReduxTHunk));

      return(
      <Provider store={store}>
          <Router/>
      </Provider>
      );
      }
  }


  export default App;
