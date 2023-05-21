import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';

import awsExports from './aws-exports';
Amplify.configure(awsExports);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>
);