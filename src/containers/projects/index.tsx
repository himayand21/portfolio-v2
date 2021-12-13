import { ReactElement, useState } from 'react';

import { Article } from '../../styles';
import {
  Title,
  TitleRow,
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
  SkillFilter,
  SkillFilterSpan,
  SkillFilterBadge,
  SkillFilterIcon,
  Aside,
  SkillRows,
  SkillRow,
  SkillRowLabel,
  SkillRowImageContainer,
  SkillInfo,
  SkillCheckBox,
} from './styles';

import projects, { projectInfoType } from '../../metadata/projects';
import skills, { skillType, SKILL_KEYS } from '../../metadata/skills';

import PreloadImage from '../../common/PreloadImage';
import Filter from '../../icons/Filter';
import Check from '../../icons/Check';
import Skills from '../../icons/Skills';

const Projects = (): ReactElement => {
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(Object.values(SKILL_KEYS));
  const numberOfSkillsSelected = Object.keys(SKILL_KEYS).length;
  const areAllSkillsSelected = selectedSkills.length === numberOfSkillsSelected;

  const toggleFiltersShown = () => setIsFiltersShown(!isFiltersShown);

  const toggleFilterCheck = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((each) => each !== skill));
    } else {
      setSelectedSkills([
        ...selectedSkills,
        skill,
      ]);
    }
  };

  const selectedProjects = projects.filter(({
    skills: projectSkills,
  }: projectInfoType) => (
    projectSkills.some(({
      key,
    }: skillType) => (
      selectedSkills.includes(key)
    ))
  ));

  const toggleSelectAllFilters = () => {
    if (areAllSkillsSelected) {
      setSelectedSkills([]);
    } else {
      setSelectedSkills(Object.values(SKILL_KEYS));
    }
  };

  return (
    <>
      <Article>
        <TitleRow>
          <Title>
            Projects
          </Title>
          <SkillFilter onClick={toggleFiltersShown}>
            <SkillFilterIcon>
              <Filter />
            </SkillFilterIcon>
            <SkillFilterSpan>
              by Skills
            </SkillFilterSpan>
            <SkillFilterBadge>
              {numberOfSkillsSelected}
            </SkillFilterBadge>
          </SkillFilter>
        </TitleRow>
        <Subtitle>
          Here are a few projects I have worked on over the years -
        </Subtitle>
        <Grid>
          {selectedProjects.map(({
            title,
            subtitle,
            image,
            link,
            skills: projectSkills,
          }: projectInfoType) => (
            <GridItem href={link} target="blank">
              <PreloadImage src={image}>
                <ProjectImage src={image} className="project-image" />
              </PreloadImage>
              <DescriptionOverlay>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectSubTitle>{subtitle}</ProjectSubTitle>
              </DescriptionOverlay>
              <SkillsContainer>
                {projectSkills.map(({
                  icon,
                  name,
                }: skillType) => (
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
      <Aside
        isFiltersShown={isFiltersShown}
      >
        <SkillRows>
          <SkillRow>
            <SkillInfo>
              <SkillRowImageContainer>
                <Skills />
              </SkillRowImageContainer>
              <SkillRowLabel>Select ALL</SkillRowLabel>
            </SkillInfo>
            <SkillCheckBox
              isChecked={areAllSkillsSelected}
              onClick={toggleSelectAllFilters}
            >
              <Check />
            </SkillCheckBox>
          </SkillRow>
          {Object.entries(skills).map(([
            skillKey, {
              name,
              icon,
            }]: [string, skillType]): ReactElement => {
            const isChecked = selectedSkills.includes(skillKey);
            return (
              <SkillRow>
                <SkillInfo>
                  <SkillRowImageContainer>
                    <PreloadImage src={icon}>
                      <SkillImage src={icon} />
                    </PreloadImage>
                  </SkillRowImageContainer>
                  <SkillRowLabel>{name}</SkillRowLabel>
                </SkillInfo>
                <SkillCheckBox
                  isChecked={isChecked}
                  onClick={() => toggleFilterCheck(skillKey)}
                >
                  <Check />
                </SkillCheckBox>
              </SkillRow>
            );
          })}
        </SkillRows>
        <SkillFilter onClick={toggleFiltersShown}>
          <SkillFilterSpan>
            Done
          </SkillFilterSpan>
        </SkillFilter>
      </Aside>
    </>
  );
};

export default Projects;
