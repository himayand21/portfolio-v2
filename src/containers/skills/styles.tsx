import styled from 'styled-components';
import {
  LAPTOP, TABLET, MOBILE, ThemeType,
} from '../../constants';
import { TypographyHeadline, TypographyLabelReduced } from '../../styles';

export const Article = styled.article`
    padding: 40px 60px;
    width: 100%;
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

export const Title = styled(TypographyHeadline)`
    color: ${({ theme }) => theme.text1};
    margin-bottom: 10px;
`;

export const Label = styled(TypographyLabelReduced)`
    color: ${({ theme }) => theme.text2};
    margin: 15px 5px;
`;

export const Block = styled.section`
    width: 100%;
    display: flex;
    margin: 30px 0;
    width: 100%;
`;

export const Left = styled.div`
    flex: 1;
`;

export const Right = styled.div`
    width: 200px;
    transform: scale(1.33) translateX(5%);
    @media only screen and (max-width: ${LAPTOP}px) {
        width: 175px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        width: 150px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        width: 125px;
    }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
`;

type withLeftRightProps = {
    isFirst?: boolean,
    isLeft?: boolean,
    isRight?: boolean,
    theme: ThemeType,
};

export const HexagonWrapper = styled('div')<withLeftRightProps>`
    position: relative;
    padding-bottom: 86.65%;
    div:nth-child(1) {
        transform: rotate(60deg);
    }
    div:nth-child(3) {
        transform: rotate(120deg);
    }
    ${({ isFirst, theme }) => (isFirst ? (`
        div:nth-child(2) {
            border-top: 4px solid ${theme.color};
            border-bottom: 4px solid ${theme.color};
        }
        div:nth-child(2n - 1) {
            border-top: 4px solid ${theme.color};
        }
        & + div {
            div:nth-child(2) {
                border-top: 4px solid ${theme.color};
                border-bottom: 4px solid ${theme.color};
            }
        }
    `) : '')}
    ${({ isLeft, theme }) => (isLeft ? (`
        transform: translateX(calc(12.5% + 2px));
        div:nth-child(2) {
            border-bottom: 4px solid ${theme.color};
        }
        div:nth-child(3) {
            border-top: 4px solid ${theme.color};
        }
    `) : '')}
    ${({ isRight, theme }) => (isRight ? (`
        transform: translateX(calc(-12.5% - 2px)) translateY(calc(50% - 2px));
        div:nth-child(2) {
            border-bottom: 4px solid ${theme.color};
        }
        div:nth-child(1) {
            border-bottom: 4px solid ${theme.color};
        }
    `) : '')}
    @media only screen and (max-width: ${TABLET}px) {
        div {
            border-width: 2px !important;
        }
        ${({ isLeft }) => (isLeft ? (`
            transform: translateX(calc(12.5% + 1px));
        `) : '')}
        ${({ isRight }) => (isRight ? (`
            transform: translateX(calc(-12.5% - 1px)) translateY(calc(50% - 1px));
        `) : '')}
    }
`;

export const HexagonSide = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    left: 25%;
    box-sizing: border-box;
`;
