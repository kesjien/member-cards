
import { AsyncStorage } from 'react-native';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(thunk),
    applyMiddleware(sagaMiddleware),
  );

  const store = createStore(reducers, enhancer);

  sagaMiddleware.run(rootSaga);
  persistStore(store, { storage: AsyncStorage }, onCompletion);
  return store;
}
