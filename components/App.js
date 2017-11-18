import React, {Component} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {lifecycle} from 'recompose'
import {injectGlobal} from 'styled-components'

const enhance = lifecycle({
  componentWillMount() {
    injectGlobal`
      @font-face {
        font-family: 'supermarket';
        src: url('/static/supermarket.ttf');
      }
      body {
        margin: 0;
        background: #212730;
        font-family: sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `
  }
})

const store = createStore((state = [], action) => {
  switch (action.type) {
    case 'INSERT_INTERVIEW_DATA':
      return [...state, ...action.payload]
    default:
      return state
  }
})

const App = Component =>
  enhance(props => (
    <Provider store={store}>
      <Component />
    </Provider>
  ))

export default App
