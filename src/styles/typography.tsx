import styled from 'styled-components';
import { TABLET, LAPTOP, MOBILE } from '../constants';

export const TypographyBody = styled.span`
    font-size: 16px;
    font-weight: 200;
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 14px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 12px;
    }
`;

export const TypographyBodyReduced = styled.span`
    font-size: 14px;
    font-weight: 200;
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 11px;
    }
`;

export const TypographyHeadlineSuper = styled.h1`
    font-size: 64px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 48px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 40px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 32px;
    }
`;

export const TypographyHeadline = styled.h2`
    font-size: 48px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 40px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 32px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 26px;
    }
`;

export const TypographyHeadlineReduced = styled.h3`
    font-size: 40px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 32px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 26px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 21px;
    }
`;

export const TypographyIntroSuper = styled.h4`
    font-size: 32px;
    font-weight: 200;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 28px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 24px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 20px;
    }
`;

export const TypographyIntro = styled.h5`
    font-size: 24px;
    font-weight: 200;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 21px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 16px;
    }
`;

export const TypographyIntroReduced = styled.h6`
    font-size: 20px;
    font-weight: 200;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 16px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 14px;
    }
`;

export const TypographyLabelSuper = styled.span`
    font-size: 24px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 21px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 16px;
    }
`;

export const TypographyLabel = styled.span`
    font-size: 21px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 19px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        font-size: 17px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        font-size: 14px;
    }
`;

export const TypographyLabelReduced = styled.span`
    font-size: 17px;
    font-weight: 400;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 14px;
    }
`;

export const TypographyCaption = styled.span`
    font-size: 12px;
    font-weight: 200;
    @media only screen and (max-width: ${LAPTOP}px) {
        font-size: 10px;
    }
`;
