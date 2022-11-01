import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers';
const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}
const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(rootReducer, enhancer);

export default store;