import { transparentize } from 'polished';
import styled from 'styled-components';
import { TypographyCaption, TypographyBodyReduced, TypographyBody } from '../../../styles';
import {
  LAPTOP, MOBILE, ThemeType,
} from '../../../constants';

type withIsHightlightsShown = {
    isHighlightsShown: boolean,
    theme: ThemeType,
}

type withNoBorder = {
    noBorder?: boolean,
    theme: ThemeType,
}

export const Aside = styled('aside')<withIsHightlightsShown>`
    flex: 1;
    position: sticky;
    top: 0px;
    min-width: 250px;
    min-height: 100vh;
    max-width: 350px;
    padding: 20px 0px 40px;
    overscroll-behavior: contain;
    pointer-events: auto;
    @media only screen and (max-width: ${LAPTOP}px) {
        max-height: 100%;
        box-sizing: border-box;
        z-index: 5;
        ${({ isHighlightsShown, theme }) => (isHighlightsShown ? (`
            position: fixed;
            top: 0px !important;
            right: 0px;
            background-color: ${theme.background};
            border-left: 1px solid ${theme.border};
            padding-top: 50px;
            transform: translateX(0px) scaleX(1);
            overflow: auto;
            opacity: 1;
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        `) : (`
            margin-left: -250px;
            transform: translateX(250px) scaleX(0);
            overflow: hidden;
            opacity: 0;
        `))}
    }
    @media only screen and (max-width: ${MOBILE}px) {
        max-width: unset;
        ${({ isHighlightsShown }) => (isHighlightsShown ? (`
            border-left: none;
        `) : '')}
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
    padding: 12px 15px 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.text2};
    border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const AsideBlockItem = styled.a`
    padding: 10px 15px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    display: flex;
    min-height: 88px;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    transition: background-color ease-in 0.3s;
    @media (hover: hover) {
        &:hover {
            background-color: ${({ theme }) => transparentize(0.5, theme.background)};
        }
    }
    &:last-child {
        padding-bottom: 15px;
        border-bottom: none;
    }
    @media only screen and (max-width: ${LAPTOP}px) {
        min-height: unset;
    }
`;

export const AsideItemImage = styled.img<withNoBorder>`
    width: 50px;
    border-radius: ${({ noBorder }) => (noBorder ? '0%' : '50%')};
    margin-right: 15px;
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
    min-height: 50px;
`;

export const AsideItemTitle = styled(TypographyBodyReduced)`
    font-weight: 400;
    color: ${({ theme }) => theme.text1};
`;

export const AsideItemSubtitle = styled(TypographyCaption)`
    color: ${({ theme }) => theme.text2};
`;

export const SkillContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 15px 15px 15px;
`;
