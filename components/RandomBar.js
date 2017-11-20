import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {connect} from 'react-redux'

import Modal from './Modal'
import {
  checkCandidate,
  majorToString,
  findInterviewCode,
} from '../core/helper'

const Container = styled.div`
  width: 100vw;
  height: 250px;
  position: relative;
  overflow: hidden;
  border-top: 1px solid #373E4D;
  border-bottom: 1px solid #373E4D;
`

const CardContainer = styled.div`
  width: 40000px;
  overflow-y: scroll;
`

const Card = styled.div`
  width: 250px;
  height: 250px;
  margin-right: 3px;
  position: relative;
  display: inline-block;
  background: ${props => (props.red) ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)'};

  &::after {
    color: #ccc;
    display: block;
    font-size: 40px;
    margin-top: 100px;
    text-align: center;
    font-family: supermarket;
    content: '${props => (props.red) ? 'ไม่ผ่าน' : 'ผ่าน'}';
  }
`

const Divider = styled.div`
  width: 5px;
  left: 50vw;
  height: 270px;
  z-index: 9999;
  margin-top: -10px;
  position: absolute;
  background: #A8F7F0;
`

class RandomBar extends Component {

  constructor() {
    super()
    this.state = {
      win: false,
      modal: false,
      info: {name: '', major: 1, code: ''},
      // Animation state
      left: '0px',
      transition: '10s',
    }
  }

  // Initialize divider position
  componentDidMount() {
    if (window !== undefined) {
      const diff = (window.innerWidth / 2) - 850
      this.setState({
        left: diff,
        win: false,
      })
    }
  }

  componentWillReceiveProps(props) {
    // Reset state
    this.reset()
    this.setState({ modal: false })

    // Start random animation
    setTimeout(() => {
      const {
        run,
        name,
        major,
        candidate,
      } = props

      if (run) {
        this.run()
        this.setState({
          win: checkCandidate(name, major, candidate),
          info: {
            name: name,
            major: majorToString(major),
            code: findInterviewCode(name, candidate),
          },
        })
      }
    }, 5)
  }

  // Random card element
  randomCard() {
    let cards = []
    for(let i = 1; i <= 140; i++) {
      let random = true
      // Card number 123 | win or lose
      if (i === 123) {
        if (this.state.win) {
          random = false
        }
      } else {
        // another card will random
        if (Math.random() * 10 > 6) {
          random = false
        }
      }
      cards.push(random)
    }
    return cards
  }

  // Reset random state
  reset() {
    if (window !== undefined) {
      const diff = (window.innerWidth / 2) - 850
      this.setState({
        left: diff,
        transition: '0s',
      })
    }
  }

  // Run random animation
  run() {
    const offset = -1 * Math.random() * 100
    const diff = (window.innerWidth / 2) - 850 - 30120 + offset
    this.setState({
      left: diff + 'px',
      transition: '10s',
    })
    // After 11 secs modal will show
    setTimeout(() => {
      if (window !== undefined) {
        this.setState({ modal: true })
      }
    }, 11 * 1000)
  }

  render() {
    return (
      <div>

        <Modal
          info={this.state.info}
          win={this.state.win}
          show={this.state.modal}
        />

        <Divider />

        <Container>
          <CardContainer
            style={{
              marginLeft: this.state.left,
              transition: this.state.transition,
            }}>
            {this.randomCard().map((x, i) => {
              return <Card red={x} key={`card` + i}></Card>
            })}
          </CardContainer>
        </Container>

      </div>
    )
  }
}

RandomBar.propTypes = {
  // True = start running, False = done
  run: PropTypes.bool.isRequired,
  // Name: candidate firstname and lastname
  name: PropTypes.string.isRequired,
  // Main major [programming, content, design, marketingk]
  major: PropTypes.number.isRequired,
}

// Get data from redux store
function mapStateToProps(state) {
  return {
    candidate: state
  }
}

export default connect(mapStateToProps, null)(RandomBar)
