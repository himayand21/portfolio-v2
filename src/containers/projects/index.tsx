import { ReactElement } from 'react';

import { Article } from '../../styles';
import {
  Title,
  Subtitle,
  Grid,
  GridItem,
  ProjectImage,
  DescriptionOverlay,
  ProjectTitle,
  ProjectSubTitle,
  SkillContainer,
  SkillsContainer,
  SkillImage,
  SkillLabel,
  SkillImageContainer,
} from './styles';

import projectInfo from '../../metadata/projects';
import PreloadImage from '../../common/PreloadImage';

const Projects = (): ReactElement => (
  <Article>
    <Title>
      Projects
    </Title>
    <Subtitle>
      Here are a few projects I have worked on over the years
    </Subtitle>
    <Grid>
      {projectInfo.map(({
        title,
        subtitle,
        image,
        link,
        skills,
      }) => (
        <GridItem href={link} target="blank">
          <PreloadImage src={image}>
            <ProjectImage src={image} className="project-image" />
          </PreloadImage>
          <DescriptionOverlay>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectSubTitle>{subtitle}</ProjectSubTitle>
          </DescriptionOverlay>
          <SkillsContainer>
            {skills.map(({
              icon,
              name,
            }) => (
              <SkillContainer>
                <SkillImageContainer>
                  <PreloadImage src={icon}>
                    <SkillImage src={icon} />
                  </PreloadImage>
                </SkillImageContainer>
                <SkillLabel>{name}</SkillLabel>
              </SkillContainer>
            ))}
          </SkillsContainer>
        </GridItem>
      ))}
    </Grid>
  </Article>
);

export default Projects;
