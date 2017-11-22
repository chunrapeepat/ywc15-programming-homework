import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Heading = styled.h1`
  color: white;
  margin: 0;
  font-size: 40px;
  font-family: supermarket;
`

const Divider = styled.div`
  display: inline-block;
  margin: 0px 10px;
  background: #A8F7F0;
  width: 10px;
  height: 10px;
`

const List = styled.div`
  font-family: supermarket;
  color: white;
  font-family: supermarket;
  font-size: 20px;
  color: #ccc;
  margin-top: 20px;

  ${this} > b {
    color: white;
  }
`

const Container = styled.div`
  display: flex;

  ${this} > div {
    flex: 1;
  }
`

export default (props) => (
  <div>
    <Heading>{props.heading}</Heading>
    <Container>
      <div>
        {props.candidates.map((x, i) => {
          if (i <= Math.floor(props.candidates.length / 2 - 1)) {
            return (
              <div>
                <List>
                  ชื่อ-นามสกุล: <b>{x.firstName} {x.lastName}</b> <Divider/>
                  รหัสเข้าสัมภาษณ์: <b>{x.interviewRef}</b>
                </List>
              </div>
            )
          }
        })}
      </div>
      <div>
        {props.candidates.map((x, i) => {
          if (i >= Math.floor(props.candidates.length / 2)) {
            return (
              <div>
                <List>
                  ชื่อ-นามสกุล: <b>{x.firstName} {x.lastName}</b> <Divider/>
                  รหัสเข้าสัมภาษณ์: <b>{x.interviewRef}</b>
                </List>
              </div>
            )
          }
        })}
      </div>
    </Container>
  </div>
)
