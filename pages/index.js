import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'

import {apiEndpoint} from '../config'
import App from '../components/App'
import Loader from '../components/Loader'
import Header from '../containers/Header'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  async componentDidMount() {
    const response = await fetch(apiEndpoint)
    const interview = await response.json()
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }
  render() {
    return (
      <Loader isLoading={this.state.loading}>
        <Header />
      </Loader>
    )
  }
}

export default App(Index)
