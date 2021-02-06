import styled from 'styled-components';
import { tablet, laptop, mobile } from '../constants';

export const TypographyBody = styled.span`
    font-size: 16px;
`;

export const TypographyBodyReduced = styled.span`
    font-size: 14px;
    @media only screen and (max-width: ${tablet}px) {
        font-size: 11px;
    }
`;

export const TypographyHeadlineSuper = styled.span`
    font-size: 64px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 48px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 40px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 32px;
    }
`;

export const TypographyHeadline = styled.span`
    font-size: 48px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 40px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 32px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 26px;
    }
`;

export const TypographyHeadlineReduced = styled.span`
    font-size: 40px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 32px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 26px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 21px;
    }
`;

export const TypographyIntroSuper = styled.span`
    font-size: 32px;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 28px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 24px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 20px;
    }
`;

export const TypographyIntro = styled.span`
    font-size: 24px;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 21px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 16px;
    }
`;

export const TypographyIntroReduced = styled.span`
    font-size: 20px;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 16px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 14px;
    }
`;

export const TypographyLabelSuper = styled.span`
    font-size: 24px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 21px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 18px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 16px;
    }
`;

export const TypographyLabel = styled.span`
    font-size: 21px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 19px;
    }
    @media only screen and (max-width: ${tablet}px) {
        font-size: 17px;
    }
    @media only screen and (max-width: ${mobile}px) {
        font-size: 14px;
    }
`;

export const TypographyLabelReduced = styled.span`
    font-size: 17px;
    font-weight: bold;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 14px;
    }
`;

export const TypographyCaption = styled.span`
    font-size: 12px;
    @media only screen and (max-width: ${laptop}px) {
        font-size: 10px;
    }
`;
