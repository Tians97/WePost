import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import categoriesReducer from './categories';
import storiesReducer from './stories';
import reviewsReducer from './reviews';
import bookmarksReducer from './bookmarks';

const rootReducer = combineReducers({
  session,
  categories:categoriesReducer,
  stories:storiesReducer,
  reviews:reviewsReducer,
  bookmarks:bookmarksReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
