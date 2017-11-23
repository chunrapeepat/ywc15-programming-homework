import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Heading = styled.h1`
  color: white;
  margin: 0;
  font-size: 40px;
  font-family: supermarket;

  @media (max-width: 950px) {
    text-align: center;
  }
`

const Divider = styled.div`
  display: inline-block;
  margin: 0px 10px;
  background: #A8F7F0;
  width: 10px;
  height: 10px;

  @media (max-width: 1250px) {
    width: 0;
    height: 0;
    display: block;
  }
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
    line-height: 30px;

    @media (max-width: 950px) {
      text-align: center;
    }
  }

  @media (max-width: 950px) {
    display: block;
  }
`

const CandidateList = props => (
  <div>
    <Heading>{props.heading.toUpperCase()}</Heading>
    <Container>

      <div>
        {props.candidates.map((x, i) => {
          if (i <= Math.floor(props.candidates.length / 2 - 1)) {
            return (
              <div key={i}>
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
              <div key={i}>
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

CandidateList.propTypes = {
  // candidates data in array(obj)
  candidates: PropTypes.object.isRequired,
  // title heading
  heading: PropTypes.string.isRequired,
}

export default CandidateList
