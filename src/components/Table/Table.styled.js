import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: #2a2922;

  &:after {
    position: absolute;
    content: '';
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const TableContainer = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  font-size: 16px;
  font-weight: 500;
`;

export const TableHeader = styled.thead`
  background: #7d5e3d;
  font-size: 18px;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 20px;
  border: 1px solid #662225;
`;

export const AddButton = styled.button`
  font-family: 'Muli', sans-serif;
  font-size: 16px;
  cursor: pointer;
  height: 50px;
  text-align: center;
  line-height: 50px;
  width: 100%;
  background: #f2ebdd;
`;

export const Spinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);

  &:before {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 26px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }

  @keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;
