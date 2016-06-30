import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middlewares = applyMiddleware(thunk);
const enhancer = compose(
  middlewares
);

export default function (initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
