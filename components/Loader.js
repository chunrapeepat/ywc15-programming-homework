import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.85);
`

// Outer animation
const keyframeLoadingRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

// Inner Animation
const keyframeLoadingBlink = keyframes`
  from {
    transform: scale(0.50);
  }
  to {
    background: #246358;
    transform: scale(0.50);
  }
`

const LoadingAnimation = styled.div`
  position: fixed;
  z-index: 9999999;

  ${this} > div:nth-child(1) {
    width: 100px;
    height: 100px;
    position: fixed;
    border-radius: 50%;
    border: 10px dashed #A8F7F0;
    margin-top: calc(50vh - 50px);
    margin-left: calc(50vw - 50px);
    animation-direction: alternate;
    animation: ${keyframeLoadingRotate} 5s linear infinite;
  }

  ${this} > div:nth-child(2) {
    width: 100px;
    height: 100px;
    background: #A8F7F0;
    position: fixed;
    border-radius: 50%;
    margin-top: calc(50vh - 50px);
    margin-left: calc(50vw - 50px);
    animation-direction: alternate;
    animation: ${keyframeLoadingBlink} 0.5s linear infinite;
  }
`

class Loader extends Component {

  constructor() {
    super()
    this.state = {
      opacity: '1',
      display: 'auto',
    }
  }

  // If isLoading = false, do fadeOut animation
  componentWillReceiveProps(props) {
    if (!props.isLoading) {
      this.setState({ opacity: 0 })
      // If animation done, display = none
      setTimeout(() => {
        this.setState({ display: 'none' })
      }, 500)
    }
  }

  render() {
    return (
      <div>
        <Container style={{
          opacity: this.state.opacity,
          display: this.state.display,
        }}>
          <LoadingAnimation>
            <div/>
            <div/>
          </LoadingAnimation>
        </Container>
        {this.props.children}
      </div>
    )
  }

}

Loader.propTypes = {
  // True = loading, False = finish loading
  isLoading: PropTypes.bool.isRequired,
  // Array of element
  children: PropTypes.array.isRequired,
}

export default Loader
