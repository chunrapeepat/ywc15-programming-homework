import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Backdrop shadow
const Backdrop = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999999;
  cursor: pointer;
`

const Padding = styled.div`
  padding: 20px;
  text-align: center;
`

// Modal container
const Container = styled.div`
  top: 50vh;
  left: 50%;
  width: 600px;
  position: fixed;
  z-index: 99999999;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  transition-timing-function: ease-in-out;
  background: ${props => (props.win) ? '#EFFFED' : '#FFEDED'};

  @media (max-width: 600px) {
    width: 90vw;
  }

  ${this} > ${Padding} > img {
    width: 80%;
  }

  ${this} > div:nth-child(1) {
    width: 100%;
    text-align: center;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: ${props => (props.win) ? '#048C00' : '#8C1100'};
  }
`

const Content = styled.div`
  display: block;

  ${this} > h1 {
    font-size: 40px;
    font-family: supermarket;
  }

  ${this} > div {
    font-size: 18px;
    line-height: 30px;
    font-family: sans-serif;
  }

  &:last-child {
    padding-bottom: 30px;
  }
`
class Modal extends Component {

  constructor() {
    super()
    this.state = {
      info: {},
      win: false,
      // Animation state
      top: '-100vh',
      transition: '0s',
      modalMargin: '100vh',
      background: 'rgba(0, 0, 0, 0)',
    }
  }

  componentWillReceiveProps(props) {
    // Update win & information
    this.setState({
      win: props.win,
      info: props.info,
    })
    if (props.show) {
      // Play backdrop and modal animation
      this.setState({
        top: '0',
        transition: '0s',
        modalMargin: '0',
        modalTransition: '0.5s',
      })
      setTimeout(() => {
        this.setState({
          transition: '0.5s',
          background: 'rgba(0, 0, 0, 0.8)',
        })
      }, 5)
    } else {
      // Reset animation
      this.setState({
        top: '-100vh',
        transition: '0.5s',
        modalMargin: '100vh',
        modalTransition: '0s',
        background: 'rgba(0, 0, 0, 0.0)',
      })
    }
  }

  // Play backdrop and modal animation (hide)
  hideBackdrop() {
    this.setState({
      transition: '0.5s',
      modalMargin: '-100vh',
      modalTransition: '0.5s',
      background: 'rgba(0, 0, 0, 0.0)',
    })
    setTimeout(() => {
      this.setState({
        top: '-100vh',
      })
    }, 500)
  }

  render() {

    const {
      win,
      modalMargin,
      modalTransition,
      transition,
      background,
      top,
    } = this.state

    return (
      <div>

        <Container
          win={win}
          style={{
            marginTop: modalMargin,
            transition: modalTransition,
          }}>
          <Padding>
            <img src="/static/logo.png" alt="YWC15"/>
          </Padding>
          <Padding>
            { this.state.win &&
              <Content>
                <h1>ขอแสดงความยินดี</h1>
                <div>คุณ {this.state.info.name}</div>
                <div>คุณมีสิทธิ์เข้าสัมภาษณ์ในสาขา {this.state.info.major}</div>
                <div>รหัสสัมภาษณ์ของคุณคือ {this.state.info.code}</div>
              </Content>
            }
            { !this.state.win &&
              <Content>
                <h1>ขอแสดงความเสียใจ</h1>
                <div>คุณ {this.state.info.name}</div>
                <div>คุณไม่มีสิทธิ์เข้าสัมภาษณ์ในสาขา {this.state.info.major}</div>
                <div>ปีหน้าเจอกันไหมนะ :)</div>
              </Content>
            }
          </Padding>
        </Container>

        <Backdrop
          onClick={() => this.hideBackdrop()}
          style={{transition, top, background}}
        />

      </div>
    )
  }
}

Modal.propTypes = {
  // True = candidate pass, False = candidate fail
  win: PropTypes.bool.isRequired,
  // True = modal open, False = modal close
  show: PropTypes.bool.isRequired,
  // Info { name, major, code (InterviewRef) }
  info: PropTypes.object.isRequired,
}

export default Modal
