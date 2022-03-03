import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/reducer";
import createSagaMiddleware from "redux-saga";
import { watchAllSagas } from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchAllSagas);
