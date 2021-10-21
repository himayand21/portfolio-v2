import { darken } from 'polished';
import styled from 'styled-components';
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
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
  margin: 0 4px;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.color)};
  }
`;
