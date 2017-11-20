import React, {Component} from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999999;
  top: 0;
  cursor: pointer;
`

const Padding = styled.div`
  padding: 20px;
  text-align: center;
`

const Container = styled.div`
  width: 600px;
  height: 450px;
  position: fixed;
  z-index: 99999999;
  top: calc(50vh - 225px);
  left: calc(50vw - 300px);
  background: ${props => (props.win) ? '#EFFFED' : '#FFEDED'};
  border-radius: 5px;
  transition-timing-function: ease-in-out;

  ${this} > div:nth-child(1) {
    background: ${props => (props.win) ? '#048C00' : '#8C1100'};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: center;
    width: 100%;
    height: 200px;
  }
`

const Content = styled.div`
  ${this} > h1 {
    font-family: supermarket;
    font-size: 40px;
  }
  ${this} > div {
    font-size: 18px;
    font-family: sans-serif;
    line-height: 30px;
  }
`

export default class extends Component {
  constructor() {
    super()
    this.state = {
      win: false,
      transition: '0s',
      background: 'rgba(0, 0, 0, 0)',
      top: '-100vh',
      modalMargin: '100vh',
      info: {name: '', major: '', code: ''},
    }
  }
  componentWillReceiveProps(props) {
    this.setState({
      win: props.win,
      info: props.info,
    })
    if (props.show) {
      this.setState({
        transition: '0s',
        top: '0',
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
      this.setState({
        transition: '0.5s',
        background: 'rgba(0, 0, 0, 0.0)',
        top: '-100vh',
        modalTransition: '0s',
        modalMargin: '100vh',
      })
    }
  }
  hideBackdrop() {
    this.setState({
      transition: '0.5s',
      background: 'rgba(0, 0, 0, 0.0)',
      modalTransition: '0.5s',
      modalMargin: '-100vh',
    })
    setTimeout(() => {
      this.setState({
        top: '-100vh'
      })
    }, 500)
  }
  render() {
    const {modalMargin, modalTransition, transition, background, top} = this.state
    return (
      <div>
        <Container win={this.state.win} style={{marginTop: modalMargin, transition: modalTransition}}>
          <Padding>
            <img height="160px" src="/static/logo.png" alt="YWC15"/>
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
        <Backdrop onClick={() => this.hideBackdrop()} style={{transition, top, background}}/>
      </div>
    )
  }
}
