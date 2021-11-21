import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createBrowserHistory from 'history/createBrowserHistory';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from "./reducers";

export const history = createBrowserHistory();
const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default function configureStore() {
//   return createStore(persistedReducer, applyMiddleware(ReduxThunk, logger));
// }


export default preloadedState => {
  const store = createStore(
    persistedReducer,
    preloadedState,
    applyMiddleware(ReduxThunk, logger)
  );
  const persistor = persistStore(store);

  return { store, persistor };
};