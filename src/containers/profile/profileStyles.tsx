import styled from 'styled-components';
import { darken } from 'polished';

import {
  TABLET,
} from '../../constants';
import { TypographyIntroReduced, TypographyBody } from '../../styles';

export const ProfileImageWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const CoverImage = styled.img`
    width: 100%;
    max-height: 100%;
    margin-bottom: 12%;
`;

export const DisplayImage = styled.img`
    width: 35%;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    bottom: 8px;
    border: 4px solid ${({ theme }) => theme.background};
`;

export const ProfileInfoContainer = styled.section`
    margin-top: 10px;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    padding-left: 20px;
    padding-bottom: 20px;
`;

export const Name = styled(TypographyIntroReduced)`
    font-weight: 400;
`;

export const ProfileInfoWrapper = styled.div`
    margin-top: 15px;
`;

export const ProfileRow = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
`;

export const Info = styled(TypographyBody)`
    display: flex;
    flex-direction: row;
    margin-right: 17px;
    color: ${({ theme }) => theme.text2};
    margin-bottom: 5px;
`;

export const InfoLogo = styled.span`
    height: 100%;
    width: 16px;
    max-height: 25px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${TABLET}px) {
        width: 14px;
    }
`;

export const InfoLink = styled.a`
    margin-left: 6px;
    align-items: stretch;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    font-weight: 400;
    &:hover {
        color: ${({ theme }) => darken(0.1, theme.color)};
    }
`;

export const InfoSpan = styled.span`
    margin-left: 7px;
    align-self: stretch
`;
