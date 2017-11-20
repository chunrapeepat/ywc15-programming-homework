import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Input, InputLabel, FlatButton, Select, Padding} from '../core/styled'
import RandomBar from '../components/RandomBar'

const FormContainer = styled.form`
  display: block;
  width: 1000px;
  margin: auto auto;
`

class SearchForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      major: 1,
    }
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }
  handleMajorChange(e) {
    this.setState({ major: parseInt(e.target.value) })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.name === '') {
      alert('Warning: name field must be required!')
    } else {
      this.setState({ name: '', major: 1 })
      this.props.receiveFormInput(this.state.name, this.state.major)
    }
  }
  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit.bind(this)}>
        <Padding>
          <InputLabel>ชื่อ นามสกุล</InputLabel>
          <Input value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="ไม่ต้องใส่คำนำหน้า เช่น ประยุทธ์ จันโอชา"/>
          <InputLabel>เลือกสาขาของตัวเอง</InputLabel>
          <Select value={this.state.major} onChange={this.handleMajorChange.bind(this)}>
            <option value="1">สาขา Web Content</option>
            <option value="2">สาขา Web Design</option>
            <option value="3">สาขา Web Marketing</option>
            <option value="4">สาขา Web Programming</option>
          </Select>
          <FlatButton type="submit">ค้นหาจากรายชื่อ</FlatButton>
        </Padding>
      </FormContainer>
    )
  }
}

SearchForm.propTypes = {
  receiveFormInput: PropTypes.func.isRequired,
}

export default class extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      major: 1,
      run: false,
    }
  }
  receiveFormInput(name, major) {
    this.setState({
      name: name,
      major: major,
      run: true,
    })
  }
  render() {
    return (
      <div>
        <RandomBar run={this.state.run} name={this.state.name} major={this.state.major}/>
        <SearchForm receiveFormInput={(name, major) => this.receiveFormInput(name, major)}/>
      </div>
    )
  }
}
