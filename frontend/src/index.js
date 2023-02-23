import React from 'react';
import ReactDOM from 'react-dom/client';

//App
import App from './App';

//Redux
import { Provider } from 'react-redux';

//Store
import {store} from "./app/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

