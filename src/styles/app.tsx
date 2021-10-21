import styled, { createGlobalStyle } from 'styled-components';
import {
  TABLET, LAPTOP, MOBILE, DESKTOP, ThemeType,
} from '../constants';

type withThemeType = {
  theme: ThemeType,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }: withThemeType) => theme.background};
  }
  * {
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    text-decoration: unset;
    color: unset;
    font-size: 16px;
    font-weight: 200;
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 14px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 12px;
    }
  }
`;

export const Screen = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-left: calc(50vw - 675px);
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
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
  background-color: inherit;
  max-height: 100vh;
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
    top: unset;
    padding: 10px 0;
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
