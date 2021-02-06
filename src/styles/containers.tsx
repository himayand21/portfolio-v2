import styled from 'styled-components';
import { tablet, laptop, mobile } from '../constants';

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-left: 10vw;
  @media only screen and (max-width: ${laptop}px) {
    padding-left: 5vw;
  }
  @media only screen and (max-width: ${mobile}px) {
    padding-left: 0px;
  }
`;

export const Left = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 15vw;
  @media only screen and (max-width: ${laptop}px) {
    width: 200px;
  }
  @media only screen and (max-width: ${tablet}px) {
    width: 150px;
  }
  @media only screen and (max-width: ${mobile}px) {
    width: 100vw;
    position: fixed;
    bottom: 0;
    border-top: 1px solid black; // theme
  }
`;

export const Right = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-left: 1px solid black; // theme
  border-right: 1px solid black; // theme
  padding-right: 10vw;
  @media only screen and (max-width: ${laptop}px) {
    padding-right: 5vw;
  }
  @media only screen and (max-width: ${mobile}px) {
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
    @media only screen and (max-width: ${mobile}px) {
      flex-direction: row;
      margin: 0;
    }
    li:first-child {
      margin-bottom: 20px;
      @media only screen and (max-width: ${mobile}px) {
        display: none;
      }
    }
`;
