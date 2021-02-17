import styled from 'styled-components';
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
`;

export const TimelineInfoSubtitle = styled(TypographyBodyReduced)`
    color: ${({ theme }) => theme.text2};
    margin-bottom: 10px;
`;
