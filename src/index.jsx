import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './module';
import App from './component/App';
import axios from 'axios';


const store = configureStore({ reducer: rootReducer });

const container = document.getElementById('root');
const root = createRoot(container)

axios.interceptors.request.use(
    config => {
        const token = window.localStorage.getItem('bookstore-token');
        if (token != null) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

root.render(<Provider store={store}>
    <App />
</Provider>);