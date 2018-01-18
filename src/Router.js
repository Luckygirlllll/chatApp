import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Chat from './components/Chat'


const RouterComponent = () => {
    return(
    <Router sceneStyle={{ paddingTop: 65}} >

    <Scene key="root">
    <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' hideNavBar={true}/>
    </Scene>
    <Scene key='main'>
            <Scene key='chat' component={Chat} title='Chat' hideNavBar={true}/>
    </Scene>
    </Scene>




    </Router>
    );
};

export default RouterComponent;
