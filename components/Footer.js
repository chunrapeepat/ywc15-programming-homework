import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  color: #ccc;
  text-align: center;
  margin: 30px 0;

  ${this} > a {
    font-weight: bold;
    color: #ccc;
    text-decoration: none;
    border-bottom: 2px solid #ccc;

    &:hover {
      color: white;
      border-bottom: 2px solid white;
    }
  }
`

export default () => (
  <Container>
    Develop & Design by <a href="https://facebook.com/chun42" target="_blank">Chun Rapeepat</a>, View source on <a href="https://github.com/chunza2542/ywc15-programming-homework" target="_blank">Github</a>
  </Container>
)
