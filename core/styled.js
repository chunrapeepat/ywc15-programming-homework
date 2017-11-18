import styled from 'styled-components'

export const Padding = styled.div`
  padding: 50px;
`

export const FlatButton = styled.div`
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
`
