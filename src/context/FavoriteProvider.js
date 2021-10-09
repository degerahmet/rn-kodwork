
import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import initialStore from './store';

const FavoriteProvider = ({children})=>{
    const store = createStore(reducers, initialStore )
    return <Provider store={store}>{children}</Provider>;
}


export default FavoriteProvider;