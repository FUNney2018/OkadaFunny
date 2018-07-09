import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import main from '../pages/main';
import login from '../pages/login';
import sign_up from '../pages/sign_up';
 
const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene key="login" initial component={login} title="ログイン画面" />
            <Scene key="sign_up" component={sign_up} title="新規登録画面" />
            <Scene key="main" component={main} title="メイン画面" />
        </Scene>
    </Router>
);
 
export default RouterComponent;