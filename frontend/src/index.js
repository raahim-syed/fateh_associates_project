import React from 'react';
import ReactDOM from 'react-dom/client';
//Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux';

//Reducers
import { loginReducer } from "./features/auth/authService";

//App
import App from './App';

//Creating Store
const store = configureStore({
  reducer: {
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

