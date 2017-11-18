import React, {Component} from 'react'
import styled from 'styled-components'
import fetch from 'isomorphic-fetch'

import {Padding, FlatButton} from '../core/styled'

const Container = styled.div`
  display: flex;
`

const Logo = styled.div`
  background: url(/static/logo.png);
  background-size: 250px 100px;
  margin-right: 50px;
  width: 250px;
  height: 100px;
`

const Heading = styled.div`
  flex: 1;
  font-family: supermarket;

  ${this} > h1 {
    color: #90F9F0;
    margin: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 45px;
  }

  ${this} > span {
    color: white;
    font-size: 25px;
  }
`

class Header extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Padding>
        <Container>
          <Logo />
          <Heading>
            <h1>SEMI_FINAL ROUND</h1>
            <span>ประกาศผู้มีสิทธิ์เข้าสัมภาษณ์</span>
          </Heading>
          <div>
            <FlatButton>ดูรายชื่อทั้งหมด</FlatButton>
          </div>
        </Container>
      </Padding>
    )
  }
}

export default Header
