import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import Counter from './Counterapp/counter';
import { Provider } from 'react';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider Store={store}>
      <Counter/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
