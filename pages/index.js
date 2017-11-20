import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import {connect} from 'react-redux'

import {apiEndpoint} from '../config'
import {insertInterviewAction} from '../core/helper'

import App from '../components/App'
import Loader from '../components/Loader'
import Header from '../containers/Header'
import Search from '../containers/Search'
import Footer from '../components/Footer'

class Index extends Component {

  constructor() {
    super()
    this.state = {
      loading: true
    }
  }

  // Fetch data to apiEndpoint
  async componentDidMount() {
    const response = await fetch(apiEndpoint)
    const interview = await response.json()
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
    this.props.pushInterviewToStore(interview)
  }


  render() {
    return (
      <Loader isLoading={this.state.loading}>
        <Header />
        <Search />
        <Footer />
      </Loader>
    )
  }
}

// Map dispatch from redux to props
function mapDispatchToProps(dispatch) {
  return {
    pushInterviewToStore: data => dispatch(insertInterviewAction(data))
  }
}

export default App(connect(null, mapDispatchToProps)(Index))
