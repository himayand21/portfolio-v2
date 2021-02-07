import styled from 'styled-components';
import { TABLET, LAPTOP, MOBILE } from '../constants';

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-left: 10vw;
  @media only screen and (max-width: ${LAPTOP}px) {
    padding-left: 5vw;
  }
  @media only screen and (max-width: ${TABLET}px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    padding-left: 0px;
  }
`;

export const Left = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 250px;
  @media only screen and (max-width: ${LAPTOP}px) {
    width: 200px;
  }
  @media only screen and (max-width: ${TABLET}px) {
    width: 80px;
    padding-right: 10px;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    width: 100vw;
    position: fixed;
    bottom: 0;
    padding-right: 0px;
    border-top: 1px solid ${(props) => props.theme.border};
  }
`;

export const Right = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-left: 1px solid ${(props) => props.theme.border};
  border-right: 1px solid ${(props) => props.theme.border};
  padding-right: 10vw;
  @media only screen and (max-width: ${LAPTOP}px) {
    padding-right: 5vw;
  }
  @media only screen and (max-width: ${TABLET}px) {
    padding-right: 10px;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 60px;
    border: none;
  }
`;

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    @media only screen and (max-width: ${TABLET}px) {
      align-items: center;
    }
    @media only screen and (max-width: ${MOBILE}px) {
      flex-direction: row;
      margin: 0;
      justify-content: space-around;
    }
    li:first-child {
      margin-bottom: 20px;
      padding-right: 0px;
      @media only screen and (max-width: ${MOBILE}px) {
        display: none;
      }
    }
`;
