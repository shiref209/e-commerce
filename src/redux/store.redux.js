import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./rootReducer";

const middleWares=[logger];
// spreading middlewares to be able to config the logger and add more properties
const store=createStore(rootReducer,applyMiddleware(...middleWares));

export default store;