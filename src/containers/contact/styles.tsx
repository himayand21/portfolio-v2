import { darken } from 'polished';
import styled from 'styled-components';
import { MOBILE, TABLET } from '../../constants';

import {
  TypographyHeadline,
  TypographyIntro,
  TypographyIntroReduced,
  TypographyLabelReduced,
} from '../../styles';

export const Title = styled(TypographyHeadline)`
  color: ${({ theme }) => theme.text1};
  margin-bottom: 10px;
`;

export const Subtitle = styled(TypographyIntroReduced)`
  color: ${({ theme }) => theme.text2};
`;

export const Card = styled.div`
  border-radius: 10px;
  max-width: 650px;
  position: relative;
  overflow: hidden;
`;

export const DisplayImage = styled.img`
  width: 30%;
  border-radius: 50%;
  position: absolute;
  right: 5%;
  top: 0px;
  border: 2px solid ${({ theme }) => theme.color};
  z-index: 1;
  box-sizing: border-box;
  transform: translateY(35%);
  @media only screen and (max-width: ${MOBILE}px) {
    right: 32.5%;
    width: 35%;
    transform: translateY(32%);
  }
`;

export const DisplayWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundHover};
  padding-top: 25%;
  position: relative;
  border-bottom: 2px solid ${({ theme }) => theme.color};
  @media only screen and (max-width: ${MOBILE}px) {
    padding-top: 28%;
  }
`;

export const DescriptionWrapper = styled.div`
  border: 3px solid ${({ theme }) => theme.backgroundHover};
  border-top: 0px;
  border-radius: 0px 0px 10px 10px;
  padding: 20px 15px 5px;
`;

export const DisplayName = styled(TypographyIntro)`
  position: absolute;
  left: 20px;
  bottom: 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.text2};
  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

export const DescriptionName = styled(TypographyIntro)`
  width: 100%;
  font-weight: bold;
  text-align: center;
  margin-top: 17%;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text2};
  @media only screen and (min-width: ${MOBILE}px) {
    display: none;
  }
`;

export const DescriptionTitle = styled(TypographyLabelReduced)`
  display: block;
  margin-top: 30px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.text2};
`;

export const DescriptionValue = styled(TypographyLabelReduced)`
  display: block;
`;

export const DescriptionLink = styled.a`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  font-weight: 400;
  &:hover {
    color: ${({ theme }) => darken(0.1, theme.color)};
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const ContactInfoLogo = styled.span`
  height: 100%;
  width: 16px;
  max-height: 25px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};
  @media only screen and (max-width: ${TABLET}px) {
    width: 14px;
  }
`;

export const ContactInfoSpan = styled(TypographyLabelReduced)`
  color: ${({ theme }) => theme.text2};
  margin-left: 10px;
`;
