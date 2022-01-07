import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { MOBILE, TABLET, ThemeType } from '../../constants';

import {
  TypographyBody,
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
  font-weight: 400;
  color: ${({ theme }) => theme.text2};
  @media only screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

export const DescriptionName = styled(TypographyIntro)`
  width: 100%;
  font-weight: 400;
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
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => darken(0.1, theme.color)};
    }
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

export const ResumeLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ResumeLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  margin-left: 6px;
  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => darken(0.1, theme.color)};
    }
  }
`;

export const ResumeLabel = styled(TypographyBody)`
  font-weight: 400;
`;

export const Footer = styled.div`
  margin: 20px 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type withIsContactFormShown = {
  isContactFormShown: boolean,
  theme: ThemeType,
}

export const Aside = styled('aside')<withIsContactFormShown>`
  min-height: 100%;
  position: fixed;
  min-width: 400px;
  padding: 20px;
  max-height: 100%;
  box-sizing: border-box;
  z-index: 5;
  ${({ isContactFormShown, theme }) => (isContactFormShown ? (`
      top: 0px;
      right: 0px;
      background-color: ${theme.background};
      border-left: 1px solid ${theme.border};
      transform: translateX(0px) scaleX(1);
      overflow: auto;
      opacity: 1;
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  `) : (`
      margin-left: -300px;
      transform: translateX(300px) scaleX(0);
      overflow: hidden;
      opacity: 0;
  `))}
  }
  @media only screen and (max-width: ${MOBILE}px) {
    min-height: unset;
    min-width: 100vw;
    bottom: 0px;
    left: 0px;
    top: unset;
    overflow: hidden;
    padding: 5px 20px;
    box-sizing: border-box;
    ${({ isContactFormShown, theme }) => (isContactFormShown ? (`
        background-color: ${theme.background};
        border: 1px solid ${theme.border};
        border-bottom: none;
        border-radius: 25px 25px 0px 0px;
        transform: translateY(0px) scaleY(1);
        opacity: 1;
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    `) : (`
        margin-top: -60vh;
        transform: translateY(60vh) scaleY(0);
        opacity: 0;
    `))}
    }
  }
`;

export const GetInTouchBtn = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 8px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  @media (hover: hover) {
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.color)};
    }
  }
  @media only screen and (max-width: ${MOBILE}px) {
    padding: 6px 8px;
  }
`;

export const GetInTouchSpan = styled(TypographyBody)`
  font-weight: 400;
`;

export const GetInTouchHeader = styled(TypographyIntro)`
  font-weight: 400;
  flex: 1;
`;

export const GetInTouchHeaderRow = styled.div`
  padding: 20px 0px 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const GetInTouchForm = styled.form`
  margin: 20px 0 10px;
`;

export const GetInTouchRow = styled.p`
  margin: 20px 0px;
  width: 100%;
  @media only screen and (max-width: ${MOBILE}px) {
    margin: 10px 0px;
  }
`;

export const GetInTouchInput = styled.input`
  background-color: ${({ theme }) => theme.backgroundHover};
  color: ${({ theme }) => theme.text};
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  border: none;
  &::placeholder {
    color: ${({ theme }) => lighten(0.2, theme.border)};
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export const GetInTouchTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.backgroundHover};
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  border: none;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => lighten(0.2, theme.border)};
  }
  &:disabled {
    opacity: 0.6;
  }
`;

export const SendMessageBtn = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 8px 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  margin-top: 35px;
  @media (hover: hover) {
    transition: background-color 0.3s ease-out;
    &:hover {
      background-color: ${({ theme }) => lighten(0.1, theme.color)};
    }
  }
  &:disabled {
    opacity: 0.3;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    margin-top: 10px;
    margin-left: auto;
    padding: 6px 8px;
  }
`;

export const SendMessageSpan = styled(TypographyBody)`
  font-weight: 400;
`;
