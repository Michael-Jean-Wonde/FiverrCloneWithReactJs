import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { Provider } from 'react-redux';
import store from './store.js';
import reportWebVitals from './reportWebVitals';
import './utills/i18next.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback="Loading...">
    <Provider store={store}>
    <App />
    </Provider>
    </Suspense>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
