import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  TypographyLabel,
} from './typography';
import { TABLET, MOBILE, ThemeType } from '../constants';

type WithIsActiveProps = {
    isActive: boolean,
    theme: ThemeType,
};

export const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 15px 0;
    padding-right: 15px;
    border-radius: 25px;
    ${({ isActive, theme }: WithIsActiveProps) => (isActive ? (`
        background-color: ${theme.color};
        color: ${theme.containedText};
    `) : (`
        &:hover {
            cursor: pointer;
            background-color: ${transparentize(0.9, theme.color)};
        }
    `))}
    @media only screen and (max-width: ${TABLET}px) {
        border-radius: 23px;
        padding-right: 0px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        border-radius: 24px;
    }
`;

export const MenuLogo = styled.span`
    width: 50px;
    height: 50px;
    padding: 12px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    color: ${({ isActive, theme }: WithIsActiveProps) => (isActive ? theme.containedText : theme.color)};
    @media only screen and (max-width: ${TABLET}px) {
        width: 46px;
        height: 46px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        width: 48px;
        height: 48px;
    }
`;

export const MenuName = styled(TypographyLabel)`
    display: flex;
    align-items: center;
    padding-left: 5px;
    user-select: none;
    color: ${({ isActive, theme }: WithIsActiveProps) => (isActive ? theme.containedText : theme.text)};
    @media only screen and (max-width: ${TABLET}px) {
        display: none;
        padding: 0px;
    }
`;

export const Icon = styled.svg`
    color: inherit;
`;
