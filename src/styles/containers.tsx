import styled from 'styled-components';
import {
  TABLET, LAPTOP, MOBILE, DESKTOP,
} from '../constants';

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-left: calc(50vw - 675px);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  @media only screen and (max-width: ${DESKTOP}px) {
    padding-left: 15px;
  }
  @media only screen and (max-width: ${LAPTOP}px) {
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
  position: sticky;
  top: 0;
  max-height: 100vh;
  @media only screen and (max-width: ${LAPTOP}px) {
    width: 80px;
    padding-right: 10px;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    width: 100vw;
    position: fixed;
    bottom: 0;
    top: unset;
    padding-right: 0px;
    border-top: 1px solid ${({ theme }) => theme.border};
  }
`;

export const Right = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-left: 1px solid ${({ theme }) => theme.border};
  border-right: 1px solid ${({ theme }) => theme.border};
  @media only screen and (max-width: ${MOBILE}px) {
    padding: 0px;
    padding-bottom: 10px;
    max-height: calc(100vh - 78px);
    overflow-y: auto;
    border: none;
  }
`;

export const MenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 40px;
    padding-left: 10px;
    padding-right: 10px;
    @media only screen and (max-width: ${TABLET}px) {
      align-items: center;
    }
    @media only screen and (max-width: ${MOBILE}px) {
      flex-direction: row;
      margin: 0;
      justify-content: space-around;
    }
`;

export const Article = styled.article`
    width: 100%;
    padding: 40px 60px;
    @media only screen and (max-width: ${LAPTOP}px) {
      padding: 40px 50px;
    }
    @media only screen and (max-width: ${TABLET}px) {
      padding: 40px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
      padding: 25px;
    }
`;
