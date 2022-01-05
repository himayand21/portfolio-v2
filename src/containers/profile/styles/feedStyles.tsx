import { transparentize } from 'polished';
import styled from 'styled-components';

import {
  DESKTOP, LAPTOP, ThemeType,
} from '../../../constants';
import { TypographyIntroSuper } from '../../../styles';

type withIsHightlightsShown = {
    isHighlightsShown: boolean,
    theme: ThemeType,
}

export const FeedWrapper = styled('section')<withIsHightlightsShown>`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-right: calc(50vw - 725px);
    @media only screen and (max-width: ${DESKTOP}px) {
        padding-right: 0px;
    }
    @media only screen and (max-width: ${LAPTOP}px) {
        ${({ isHighlightsShown }) => (isHighlightsShown ? (`
            pointer-events: none;
        `) : '')};
    }
`;

export const Feed = styled.div`
    max-width: 600px;
    min-width: 60%;
    min-height: 100%;
    border-right: 1px solid ${({ theme }) => theme.border};
    @media only screen and (max-width: ${LAPTOP}px) {
        width: 100%;
        min-width: unset;
        max-width: unset;
        border-right-width: 0px;
    }
`;

export const Header = styled(TypographyIntroSuper)`
`;

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const HighlightsIcon = styled.span`
    height: 100%;
    width: 24px;
    display: none;
    align-items: center;
    color: ${({ theme }) => theme.color};
    &:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: ${LAPTOP}px) {
        display: flex;
    }
`;

export const CrossIcon = styled.div`
    width: 32px;
    height: 32px;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => transparentize(0.9, theme.color)};
    display: none;
    align-items: center;
    color: ${({ theme }) => theme.color};
    position: absolute;
    top: 10px;
    right 20px;
    z-index: 6;
    &:hover {
        cursor: pointer;
    }
    @media only screen and (max-width: ${LAPTOP}px) {
        display: flex;
    }
`;
