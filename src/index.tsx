import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/js/bootstrap.bundle';
import './style.scss';
import './assets/css/styles.e-commerce.css';
import './assets/vendor/icon-line-pro/style.css'
import './assets/vendor/icon-line/css/simple-line-icons.css'


ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);