import styled from 'styled-components';
import { transparentize } from 'polished';
import { TypographyBody, TypographyBodyReduced } from '../../../styles';
import { TABLET, ThemeType } from '../../../constants';

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
    border: 3px solid ${({ theme }) => theme.border};
    background-color: ${({ theme }) => theme.backgroundHover};
    transition: background-color ease-in 0.3s;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => transparentize(0.1, theme.backgroundHover)};
    }
`;

export const TimelineLinkImage = styled.img`
    padding: 15px 10px;
    background-color: transparent;
    width: 20%;
    margin-left: 10px;
    align-self: center;
    @media only screen and (max-width: ${TABLET}px) {
        width: 25%;
    }
`;

export const TimelineLinkDivider = styled.div`
    width: 2px;
    margin: 4% 10px;
    background-color: ${({ theme }) => theme.border};
    border-radius: 2px;
`;

export const TimelineLinkTitle = styled(TypographyBody)`
    color: ${({ theme }) => theme.text};
    margin: 10px 0;
    * {
        font-weight: 400;
    }
`;

export const TimelineLinkSubtitle = styled(TypographyBodyReduced)`
    color: ${({ theme }) => theme.text2};
    font-weight: 400;
    margin-bottom: 10px;
`;

export const TimelineLinkInfoWrapper = styled.div`
    flex: 1;
    padding: 4%;
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
    color: white;
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
    b {
        color: ${({ theme }) => theme.text};
        font-weight: 400;
    }
`;

export const DescriptionWrapper = styled.div`
  margin: 15px 0;
  line-height: 1.7rem;
`;

export const Description = styled(TypographyBody)`
  color: ${({ theme }) => theme.text2};
  margin-bottom: 20px;
  display: block;
  b {
    color: ${({ theme }) => theme.text};
    font-weight: 400;
  }
  a {
    font-weight: 400;
  }
`;

export const DescriptionList = styled.ul`
    list-style-type: none;
    margin: 10px 0;
`;

export const DescriptionListItem = styled.li`
    display: flex;
    b {
        color: ${({ theme }) => theme.text};
        font-weight: 400;
    }
    b, a, span {
        margin-bottom: 5px;
        margin-left: 0px;
    }
`;

export const WorkExperienceContent = styled(TimelineInfoSubtitle)`
    flex: 1;
    padding-bottom: 5px;
`;

export const ListContent = styled.div`
    flex: 1;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
`;

type withIsFirst = {
    isFirst?: boolean,
    theme: ThemeType,
};

type withIsLast = {
    isLast?: boolean,
    theme: ThemeType,
};

export const ListBulletWrapper = styled('div')<withIsLast>`
    display: flex;
    width: 10%;
    margin: 0px;
    transform: translateY(0.7rem);
    margin-right: 10px;
    ${({ isLast }) => (isLast ? (`
        & ~ div {
            margin-bottom: 0px;
            padding-bottom: 0px;
        }
        & ~ span {
            margin-bottom: 0px;
            padding-bottom: 0px;
        }
    `) : '')}
`;

export const LeftBranch = styled('div')<withIsFirst>`
    flex: 1;
    ${({ isFirst, theme }) => (isFirst ? (`
        border-top: 1px solid ${theme.border};
    `) : '')}
`;

export const RightBranch = styled('div')<withIsLast>`
    flex: 1;
    border-top: 1px solid ${({ theme }) => theme.border};
    ${({ isLast, theme }) => (!isLast ? (`
        border-left: 1px solid ${theme.border};
    `) : '')}
`;

export const ListContentDescription = styled(Description)``;
