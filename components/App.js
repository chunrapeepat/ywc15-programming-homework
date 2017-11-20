import React, {Component} from 'react'
import {createStore} from 'redux'
import {lifecycle} from 'recompose'
import {Provider} from 'react-redux'
import {injectGlobal} from 'styled-components'

// Inject global css styles
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

// Redux store for keeping Candidates data
const store = createStore((state = [], action) => {
  switch (action.type) {
    case 'INSERT_INTERVIEW_DATA':
      if (state.length > 0) {
        return state
      } else {
        return [...state, ...action.payload]
      }
    default:
      return state
  }
})

// Warp Provider to app component
const App = Component =>
  enhance(props => (
    <Provider store={store}>
      <Component />
    </Provider>
  ))

export default App
