import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom';


// css
import "./css/aos.css";
import "./css/animate.css";
import "./css/ionicons.min.css";
import "./css/index.scss";

//page layout
import Footer from './components/layouts/Footer';

//import pages
import Product from './components/pages/product';


const RouterList = (
  <React.StrictMode>
    <Router>
        <Product />
        <Footer />
    </Router>
    </React.StrictMode>
  );


ReactDOM.render(RouterList,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
