import { transparentize } from 'polished';
import styled from 'styled-components';
import { TypographyCaption, TypographyBodyReduced, TypographyBody } from '../../styles';
import {
  LAPTOP,
  TABLET,
} from '../../constants';

export const Aside = styled.aside`
    flex: 1;
    min-height: 100vh;
    position: sticky;
    top: 0;
    min-width: 300px;
    @media only screen and (max-width: ${TABLET}px) {
        display: none;
    }
`;

export const AsideBlock = styled.section`
    margin: 20px;
    margin-top: 0px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.backgroundHover};
    &:first-child {
        margin-top: 20px;
    }
`;

export const AsideBlockTitle = styled(TypographyBody)`
    display: block;
    width: 100%;
    padding: 10px 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text2};
`;

export const AsideBlockItem = styled.a`
    padding: 10px 15px;
    border-top: 1px solid ${({ theme }) => theme.border};
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: background-color ease-in 0.3s;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.5, theme.background)};
    }
    &:last-child {
        padding-bottom: 20px;
    }
`;

export const AsideItemImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    @media only screen and (min-width: ${TABLET}px) and (max-width: ${TABLET + 200}px) {
        display: none;
    }
    @media only screen and (min-width: ${LAPTOP}px) and (max-width: ${LAPTOP + 100}px) {
        display: none;
    }
`;

export const AsideItemInfoWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
`;

export const AsideItemTitle = styled(TypographyBodyReduced)`
    font-weight: 400;
    color: ${({ theme }) => theme.text1};
`;

export const AsideItemSubtitle = styled(TypographyCaption)`
    color: ${({ theme }) => theme.text2};
`;
