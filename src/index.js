import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import Index from "./views/index/index"
const store = createStore(reducer)
render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
)