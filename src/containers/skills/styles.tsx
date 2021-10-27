import styled from 'styled-components';
import {
  LAPTOP, TABLET, MOBILE, ThemeType,
} from '../../constants';
import { TypographyHeadline, TypographyIntro, TypographyLabelReduced } from '../../styles';

export const Article = styled.article`
    padding: 40px 0px 0px 40px;
    width: 100%;
    @media only screen and (max-width: ${LAPTOP}px) {
      padding: 40px 0px 0px 50px;
    }
    @media only screen and (max-width: ${TABLET}px) {
      padding: 40px 0px 0px 40px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
      padding: 25px 0px 0px 25px;
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
`;

export const Left = styled.div`
    flex: 1;
`;

export const Right = styled.div`
    width: 350px;
    @media only screen and (max-width: ${TABLET}px) {
        width: 300px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        width: 250px;
        transform: translateX(35px);
    }
`;

export const SkillLabel = styled(TypographyIntro)`
    display: block;
    font-weight: 400;
    margin: 54px 0;
    line-height: 1em;
    @media only screen and (max-width: ${LAPTOP}px) {
        margin: 56px 0;
    }
    @media only screen and (max-width: ${TABLET}px) {
        margin: 48px 0;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        margin: 39px 0;
    }
`;

export const SkillIcon = styled.img`
    width: 80%;
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
`;

export const HexagonSide = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    left: 25%;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
