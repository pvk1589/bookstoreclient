import React from 'react';
import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reducers from '../module'


const storeConfig = configureStore({ reducer: rootReducer, initialState });


const renderWithRedux  = (
    ui, {
      initialState,
      store = storeConfig
    }
)  =>  ({
    ...render(
        <Provider store={store}>{ui}</Provider>
    )
})


export default renderWithRedux;