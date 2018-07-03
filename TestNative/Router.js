import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import pageA from './pages/pageA';
import pageB from './pages/pageB';
import pageC from './pages/pageC';
import pageD from './pages/pageD';
 
const RouterComponent = () => (
    <Router>
        <Scene key="root">
            <Scene key="pageA" initial component={pageA} title="Home" />
            <Scene key="pageB" component={pageB} title="送金画面" />
            <Scene key="pageC" component={pageC} title="送金要求画面" />
            <Scene key="pageD" component={pageD} title="履歴画面" />
        </Scene>
    </Router>
);
 
export default RouterComponent;