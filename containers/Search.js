import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SearchForm from '../components/SearchForm'
import RandomBar from '../components/RandomBar'

class SearchContainer extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      major: 1,
      run: false,
    }
  }

  // Receive data from SearchForm
  receiveFormInput(name, major) {
    this.setState({
      name: name,
      major: major,
      run: true,
    })
  }

  // Throw data into RandomBar Component
  render() {
    return (
      <div>
        <RandomBar
          run={this.state.run}
          name={this.state.name}
          candidate={this.props.candidate}
          major={this.state.major}/>
        <SearchForm
          receiveFormInput={(name, major) => this.receiveFormInput(name, major)}/>
      </div>
    )
  }
}

// map candidates data from redux store to props
function mapStateToProps(state) {
  return {
    candidate: state
  }
}

SearchContainer.propTypes = {
  // candidates data from redux store
  candidate: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, null)(SearchContainer)
