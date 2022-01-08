import styled from 'styled-components';
import { lighten } from 'polished';
import {
  LAPTOP, TABLET, MOBILE, ThemeType,
} from '../../constants';

import {
  TypographyCaption,
  TypographyHeadline,
  TypographyIntroReduced,
  TypographyLabelReduced,
  TypographyLabelSuper,
  TypographyBody,
} from '../../styles';

export const TitleRow = styled.header`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled(TypographyHeadline)`
  color: ${({ theme }) => theme.text1};
  flex: 1;
`;

export const SkillFilterToggler = styled.button`
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  padding: 3px 8px;
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
`;

export const SkillFilterTogglerFixed = styled(SkillFilterToggler)`
  position: fixed;
  top: 40px;
  right: 60px;
  z-index: 2;
  border: 3px solid ${({ theme }) => theme.text2};
  @media only screen and (max-width: ${LAPTOP}px) {
    right: 50px;
  }
  @media only screen and (max-width: ${TABLET}px) {
    right: 40px;
  }
  @media only screen and (max-width: ${MOBILE}px) {
    top: 25px;
    right: 25px;
  }
`;

export const SkillFilterIcon = styled.div`
  width: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

export const SkillFilterSpan = styled(TypographyLabelReduced)`
  font-weight: 600;
`;

export const SkillFilterBadge = styled(TypographyCaption)`
  padding: 1px 5px 1px 3px;
  border-radius: 4px 50% 50% 4px;
  transform: translateX(4px);
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  font-weight: 400;
`;

export const Subtitle = styled(TypographyIntroReduced)`
  color: ${({ theme }) => theme.text2};
`;

export const Grid = styled.section`
  display: grid;
  margin-top: 25px;
  grid-gap: 22px;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: ${LAPTOP}px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: ${TABLET}px) {
    grid-gap: 15px;
  }
`;

export const GridItem = styled.a`
  box-shadow: 2px 5px 10px -1px ${({ theme }) => theme.shadow};
  border-radius: 10px;
  overflow: hidden;
  padding-top: 67%;
  position: relative;
  display: block;
  cursor: pointer;
  @media (hover: hover) {
    .project-image {
      transition: transform 0.3s ease-out;
    }
    &:hover {
      .project-image {
        transform: scale(1.05);
      }
    }
  }
`;

export const ProjectImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DescriptionOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background: linear-gradient(180deg, transparent, black);
`;

export const ProjectTitle = styled(TypographyLabelSuper)`
  color: white;
  margin-left: 15px;
  @media only screen and (max-width: ${TABLET}px) {
    margin-left: 10px;
  }
`;

export const ProjectSubTitle = styled(TypographyCaption)`
  color: rgba(255, 255, 255, 0.7);
  margin: 5px 15px 15px;
  font-weight: 400;
  @media only screen and (max-width: ${TABLET}px) {
    margin: 2px 10px 10px;
  }
`;

export const SkillsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  @media only screen and (max-width: ${TABLET}px) {
    padding-top: 5px;
    padding-right: 5px;
  }
`;

export const SkillImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SkillImage = styled.img`
  height: 100%;
  min-width: 12px;
`;

export const SkillLabel = styled(TypographyCaption)`
  font-weight: 400;
  margin-left: 5px;
`;

type withIsFiltersShown = {
  isFiltersShown: boolean,
  theme: ThemeType,
}

export const Aside = styled('aside')<withIsFiltersShown>`
  min-height: 100%;
  position: fixed;
  min-width: 300px;
  padding: 20px;
  max-height: 100%;
  box-sizing: border-box;
  z-index: 5;
  ${({ isFiltersShown, theme }) => (isFiltersShown ? (`
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
    max-height: 60vh;
    min-width: 100vw;
    bottom: 0px;
    left: 0px;
    top: unset;
    overflow: hidden;
    padding: 5px 20px;
    box-sizing: border-box;
    ${({ isFiltersShown, theme }) => (isFiltersShown ? (`
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

export const SkillRow = styled.div`
  margin: 22px 0;
  display: flex;
  align-items: center;
`;

export const SkillFilterHeaderRow = styled.div`
  padding: 20px 0px 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const SkillFilterFooterRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.border};
  padding: 20px 0px 10px 0;
`;

export const SkillFilterHeader = styled(TypographyBody)`
  font-weight: 400;
  flex: 1;
`;

export const SkillFilterSelectAllBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const SkillFilterSelectAllSpan = styled(TypographyBody)`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
`;

export const SkillRows = styled.div`
  @media only screen and (max-width: ${MOBILE}px) {
    max-height: calc(60vh - 118px);
    overflow: auto;
    margin-left: -20px;
    padding-left: 20px;
    margin-right: -20px;
    padding-right: 20px;
    overscroll-behavior: contain;
  }
`;

export const SkillRowLabel = styled(TypographyLabelReduced)`
  color: ${({ theme }) => theme.text2};
  font-weight: 400;
  margin-left: 10px;
`;

export const SkillRowImageContainer = styled(SkillImageContainer)`
  width: 30px;
`;

type withIsChecked = {
  isChecked: boolean,
  theme: ThemeType,
}

export const SkillCheckBox = styled('button')<withIsChecked>`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 2px;
  color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease-out, border-color 0.3s ease-out;
  ${({ isChecked, theme }) => (isChecked ? (`
    background-color: ${theme.color};
    border: 2px solid ${theme.border};
    * {
      opacity: 1;
    }
    @media (hover: hover) {
      &:hover {
        background-color: ${lighten(0.1, theme.color)};
      }
    }
  `) : (`
    background: none;
    border: 2px solid ${theme.color};
    * {
      opacity: 0;
    }
  `))}
`;

export const SkillContainer = styled('div')<withIsChecked>`
  height: 20px;
  border-radius: 5px;
  padding: 4px;
  margin: 2px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${TABLET}px) {
    margin: 1px;
  }
  ${({ isChecked }) => (isChecked ? (`
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(215, 215, 215);
  `) : (`
    background-color: rgba(70, 70, 70, 0.5);
    color: rgb(195, 195, 195);
    opacity: 0.8;
  `))}
`;

export const SkillInfo = styled.div`
  flex: 1;
  height: 25px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${TABLET}px) {
    height: 20px;
  }
`;
