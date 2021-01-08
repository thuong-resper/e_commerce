import { applyMiddleware, combineReducers, createStore } from "redux";
// import { watchAuth, watchBurgerBuilder, watchOrder } from "./store/sagas/index";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import {
  productDetailsReducer,
  productListReducer
} from "./reducers/productReducers";

// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;
const rootReducer = combineReducers({
  // burgerBuilder: burgerBuilderReducer,
  // order: orderReducer,
  // auth: authReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
  },
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

const store = createStore(
  rootReducer /* preloadedState, */,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//run saga
// sagaMiddleware.run(watchAuth, watchBurgerBuilder);
// sagaMiddleware.run(watchBurgerBuilder);
// sagaMiddleware.run(watchOrder);

export default store;
