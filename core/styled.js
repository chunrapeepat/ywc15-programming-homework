import styled from 'styled-components'

export const Padding = styled.div`
  padding: ${props => (props.widthonly) ? '0' : '50px'} 50px;
`

export const InputLabel = styled.span`
  font-family: supermarket;
  color: white;
  font-size: 22px;
  display: inline-block;
  margin-bottom: 10px;
`

export const Input = styled.input`
  outline: none;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #A8F7F0;
  font-size: 18px;
  background: rgba(168,247,240,0.1);
  color: white;
  display: block;
  width: 100%;
  margin-bottom: 30px;

  &:focus {
    background: rgba(168, 247, 240, 0.2);
  }

  &:disabled {
    background: rgba(168, 247, 240, 0.2);
  }

  &::-webkit-input-placeholder {
    color: rgba(168, 247, 240, 0.5);
  }
  &::-moz-placeholder {
    color: rgba(168, 247, 240, 0.5);
  }
  &:-ms-input-placeholder {
    color: rgba(168, 247, 240, 0.5);
  }
  &:-moz-placeholder {
    color: rgba(168, 247, 240, 0.5);
  }
`

export const Select = styled.select`
  height: 40px;
  background: transparent;
  outline: none;
  border: 1px solid #A8F7F0;
  font-size: 18px;
  background: rgba(168, 247, 240, 0.1);
  color: white;
  display: block;
  width: 100%;
  margin-bottom: 30px;

  &:disabled {
    background: rgba(168, 247, 240, 0.2);
  }
`

export const FlatButton = styled.button`
  border: 0;
  outline: none;
  color: white;
  font-family: supermarket;
  cursor: pointer;
  font-size: 22px;
  padding: 15px 25px;
  background: rgba(144, 249, 240, 0.1);
  border-radius: 5px;

  &:hover {
    background: rgba(144, 249, 240, 0.2);
  }

  &:active {
    background: rgba(144, 249, 240, 0.4);
  }

  &:disabled {
    background: rgba(144, 249, 240, 0.4);
  }
`
