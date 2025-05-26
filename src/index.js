import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './index.css';
import App from '../src/Containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

// Updated for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
