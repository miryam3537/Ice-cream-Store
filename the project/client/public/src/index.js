// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter} from 'react-router-dom';
// import loginSlice from "./Store/loginSlice"

// import { Provider } from 'react-redux'
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

// import { configureStore } from '@reduxjs/toolkit';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const myStore = configureStore({
//   reducer: {
    
//     loginSlice
//   }
// })
//  root.render(
  

//   <Provider store={myStore}>
//     <BrowserRouter>
//     <PrimeReactProvider><App /></PrimeReactProvider>
//     </BrowserRouter>
//     </Provider>

// );

// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import loginSlice from "./Store/loginSlice";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create the Redux store only once
const myStore = configureStore({
    reducer: {
        loginSlice, // Register the loginSlice reducer
    },
});

root.render(
    <Provider store={myStore}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

reportWebVitals();