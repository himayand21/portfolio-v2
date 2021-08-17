import styled from 'styled-components';
import { transparentize } from 'polished';
import { TypographyBody, TypographyBodyReduced } from '../../styles';
import { TABLET } from '../../constants';

export const TimelineItem = styled.section`
    width: 100%;
    padding: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    &:last-child {
        border-bottom: none;
    }
    @media only screen and (max-width: ${TABLET}px) {
        padding: 5%;
    }
`;

export const Sender = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SenderDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-around;
`;

export const SenderDate = styled(TypographyBodyReduced)`
    color: ${({ theme }) => theme.text2};
`;

export const SenderImage = styled.img`
    width: 8%;
    height: 8%;
    min-width: 45px;
    min-height: 45px;
    border-radius: 50%;
    margin-right: 15px;
`;

export const SenderName = styled(TypographyBody)`
    font-weight: 400;
    color: ${({ theme }) => theme.text};
`;

export const TimelineInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    text-align: center;
`;

export const TimelineLink = styled.a`
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    margin: 20px 0 10px;
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundHover};
    transition: background-color ease-in 0.3s;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.05, theme.background)};
    }
`;

export const TimelineLinkImage = styled.img`
    padding: 10px;
    background-color: white;
    width: 25%;
    @media only screen and (max-width: ${TABLET}px) {
        width: 35%;
    }
`;

export const TimelineLinkTitle = styled(TypographyBody)`
    color: ${({ theme }) => theme.text};
    font-weight: 400;
    margin: 10px 0;
`;

export const TimelineLinkSubtitle = styled(TypographyBodyReduced)`
    color: ${({ theme }) => theme.text2};
    font-weight: 400;
    margin-bottom: 10px;
`;

export const TimelineLinkInfoWrapper = styled.div`
    flex: 1;
    padding: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
`;

export const TimelineIcon = styled.div`
    width: 80px;
    height: 80px;
    padding: 20px;
    border-radius: 50%;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.color};
`;

export const TimelineInfoTitle = styled(TypographyBody)`
    color: ${({ theme }) => theme.text};
    margin-top: 20px;
    margin-bottom: 7px;
    font-weight: 400;
`;

export const TimelineInfoSubtitle = styled(TypographyBodyReduced)`
    color: ${({ theme }) => theme.text2};
    margin-bottom: 10px;
    font-weight: 400;
`;
