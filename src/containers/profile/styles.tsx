import styled from 'styled-components';
import {
  LAPTOP, DESKTOP, TABLET,
} from '../../constants';

export const ProfileImageWrapper = styled.div`
    width: 100%;
    position: relative;
`;

export const CoverImage = styled.img`
    width: 100%;
    max-height: 100%;
`;

export const DisplayImage = styled.img`
    width: 35%;
    border-radius: 50%;
    position: absolute;
    left: 5%;
    bottom: -20%;
    border: 4px solid ${({ theme }) => theme.background};
`;

export const FeedWrapper = styled.section`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-right: calc(50vw - 675px);
    @media only screen and (max-width: ${DESKTOP}px) {
        padding-right: 15px;
    }
    @media only screen and (max-width: ${LAPTOP}px) {
        padding-right: 0px;
    }
`;

export const Feed = styled.div`
    max-width: 550px;
    min-width: 50%;
    min-height: 150vh;
    border-right: 1px solid ${({ theme }) => theme.border};
    @media only screen and (max-width: ${TABLET}px) {
        width: 100%;
        min-width: unset;
        max-width: unset;
        border-right-width: 0px;
    }
`;

export const Aside = styled.aside`
    flex: 1;
    min-height: 100vh;
    position: sticky;
    top: 0;
    @media only screen and (max-width: ${TABLET}px) {
        display: none;
    }
`;
