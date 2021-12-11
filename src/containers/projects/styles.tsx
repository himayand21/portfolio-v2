import styled from 'styled-components';
import { LAPTOP, TABLET } from '../../constants';

import {
  TypographyCaption,
  TypographyHeadline,
  TypographyIntroReduced,
  TypographyLabelSuper,
} from '../../styles';

export const Title = styled(TypographyHeadline)`
  color: ${({ theme }) => theme.text1};
  margin-bottom: 10px;
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
  @media (hover: hover) {
    .project-image {
      transition: transform 0.3s ease-out;
    }
    &:hover {
      cursor: pointer;
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
  color: white;
  margin: 5px 15px 15px;
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

export const SkillContainer = styled.div`
  height: 20px;
  border-radius: 5px;
  padding: 4px;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${TABLET}px) {
    margin: 1px;
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
`;

export const SkillLabel = styled(TypographyCaption)`
  color: rgb(215, 215, 215);
  font-weight: bold;
  margin-left: 5px;
`;
