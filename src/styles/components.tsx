import styled from 'styled-components';
import { TypographyLabel } from './typography';
import { tablet, mobile } from '../constants';

export const MenuItem = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 15px 0;
`;

export const MenuLogo = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${tablet}px) {
        width: 26px;
        height: 26px;
    }
    @media only screen and (max-width: ${mobile}px) {
        width: 28px;
        height: 28px;
    }
`;

export const MenuName = styled(TypographyLabel)`
    flex: 1;
    margin-left: 15px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${mobile}px) {
        display: none;
    }
`;

export const Icon = styled.svg`
    color: red; // theme
`;
