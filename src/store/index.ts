import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import authReducer from '../modules/auth-module/reducers/auth';

export const configureStore = () => {
  const middlewares: any[] = [];

  const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth'],
    blacklist: [],
  };

  const rootReducer = combineReducers({auth: authReducer});

  const persitedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persitedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return {store, persistor};
};
