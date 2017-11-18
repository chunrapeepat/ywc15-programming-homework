import React, {Component} from 'react'
import styled from 'styled-components'

import RandomBar from '../components/RandomBar'

const Container = styled.div`

`

const FormContainer = styled.form`
  display: block;
  width: 1000px;
  margin: auto auto;
`

export default class extends Container {
  render() {
    return (
      <Container>
        <RandomBar />
        <FormContainer>
          asdasdsad
        </FormContainer>
      </Container>
    )
  }
}
