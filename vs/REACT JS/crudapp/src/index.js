import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap5/src/css/bootstrap.min.css'
import Showdata from './CRUD/Showdata';
import { Provider } from 'react-redux';
import store from './store';
import Home from './CRUD/home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Update from './CRUD/Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      {/* <Showdata />
      <Home /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/showdata' element={<Showdata/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>
      </Router>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
