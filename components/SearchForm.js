import React, {Component} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  Input,
  InputLabel,
  FlatButton,
  Select,
} from '../core/styled'

const FormContainer = styled.form`
  display: block;
  width: 1000px;
  margin: auto auto;

  ${this} > div {
    padding: 50px;

    @media (max-width: 500px) {
      padding: 40px 15px;
    }
  }

  @media (max-width: 950px) {
    width: 100%;
  }
`

// SearchForm Component
class SearchForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      major: 1,
      disabled: false,
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
    // check if name field is blank
    if (this.state.name === '') {
      alert('Warning: name field must be required!')
    } else {
      this.setState({ disabled: true })
      // after 11 secs set disabled = false
      setTimeout(() => {
        this.setState({ name: '', major: 1, disabled: false })
      }, 11 * 1000)
      // send input data to another component
      this.props.receiveFormInput(this.state.name, this.state.major)
    }
  }

  render() {
    return (
      <FormContainer
        onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <InputLabel>ชื่อ นามสกุล</InputLabel>
          <Input
            disabled={this.state.disabled}
            value={this.state.name}
            onChange={this.handleNameChange.bind(this)}
            placeholder="ไม่ต้องใส่คำนำหน้า เช่น ประยุทธ์ จันทร์โอชา"/>
          <InputLabel>เลือกสาขาของตัวเอง</InputLabel>
          <Select
            disabled={this.state.disabled}
            value={this.state.major}
            onChange={this.handleMajorChange.bind(this)}>
            <option value="1">สาขา Web Content</option>
            <option value="2">สาขา Web Design</option>
            <option value="3">สาขา Web Marketing</option>
            <option value="4">สาขา Web Programming</option>
          </Select>
          <FlatButton
            disabled={this.state.disabled}
            type="submit">
            {(this.state.disabled) ? 'กำลังค้นหา...' : 'ค้นหาจากรายชื่อ'}
          </FlatButton>
        </div>
      </FormContainer>
    )
  }

}

SearchForm.propTypes = {
  // Function that take input to another component
  // params: name, major
  receiveFormInput: PropTypes.func.isRequired,
}

export default SearchForm
