import React from 'react';

import Main from './Main';
// import AsynchRoute from './AsynchRoute'
import { Match, Miss } from 'react-router'
import '../css/normalize.css';
import '../css/App.css';



if (global) {
  global.System = {import () {}}
}

const App = () => {
  return (
    <div>
        <Match
          exactly pattern='/'
          component={Main} />
          {/* component={(props) => <AsynchRoute props={props}
          loadingPromise={System.import('./Main')} />

        } /> */}
        {/* <Miss component={Main} /> */}
    </div>
  )
}


export default App
