import React, {Component} from 'react'
import styled from 'styled-components'

import {Input, InputLabel, FlatButton, Select, Padding} from '../core/styled'
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
          <Padding>
            <InputLabel>ชื่อ นามสกุล</InputLabel>
            <Input placeholder="ไม่ต้องใส่คำนำหน้า เช่น ประยุทธ์ จันโอชา"/>
            <InputLabel>เลือกสาขาของตัวเอง</InputLabel>
            <Select>
              <option value="">สาขา Web Content</option>
              <option value="">สาขา Web Design</option>
              <option value="">สาขา Web Marketing</option>
              <option value="">สาขา Web Programming</option>
            </Select>
            <FlatButton>ค้นหาจากรายชื่อ</FlatButton>
          </Padding>
        </FormContainer>
      </Container>
    )
  }
}
