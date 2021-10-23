import { darken } from 'polished';
import styled from 'styled-components';
import { TypographyBodyReduced } from './typography';
import {
  TABLET, LAPTOP, MOBILE,
} from '../constants';

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

export const Icon = styled.svg`
    color: inherit;
    width: 100%;
    height: 100%;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
  margin: 0 4px;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.color)};
  }
`;

export const Pill = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%) translateY(50%);
  z-index: 2;
  border-radius: 10px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${({ theme }) => theme.text2};
`;

export const PillContent = styled(TypographyBodyReduced)`
  color: ${({ theme }) => theme.background};
  font-weight: 400;
  letter-spacing: 0.1em;
`;
