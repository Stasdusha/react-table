import styled from 'styled-components';

export const Input = styled.input`
  font-family: inherit;
  border: none;
  font-size: inherit;
  font-weight: inherit;
  width: 100%;
  text-align: center;
  padding: 0;
  outline: none;
  background: inherit;
`;

export const Th = styled.th`
  position: relative;
  cursor: pointer;
  padding: 20px;
  border: 1px solid #662225;
  box-shadow: ${({ active }) => (active ? '0 0 10px rgba(0,0,0,0.5)' : '')};
`;

export const Value = styled.div`
  min-height: 20px;
  max-width: max-content;
  margin: 0 auto;
`;

export const RemoveButton = styled.div`
  height: 30px;
  width: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  background: #b52d0a;
  border: 1px solid #662225;
  position: absolute;
  right: -30px;
  top: 0;
  border: 4px;

  &:before {
    color: #fff;
    content: 'X';
  }
`;
