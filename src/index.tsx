import * as React from "react"
import { render } from "react-dom"
import './index.css';
import { createStore, applyMiddleware, Store } from "redux"
import App from './App';
import reducer from "./store/reducer"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

const store:Store<todoState,todoAction> & {
   dispatch:DispatchType
} = createStore(reducer,applyMiddleware(thunk))

const rootElement = document.getElementById("root")

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)