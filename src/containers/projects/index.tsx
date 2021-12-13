import {
  MouseEventHandler, ReactElement, useState, MouseEvent,
} from 'react';

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
  SkillFilterHeaderRow,
  SkillFilterFooterRow,
  SkillFilterHeader,
  SkillFilterSelectAllBtn,
  SkillFilterSelectAllSpan,
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

const Projects = (): ReactElement => {
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(Object.values(SKILL_KEYS));

  const numberOfSkillsSelected = selectedSkills.length;
  const areAllSkillsSelected = Object.keys(SKILL_KEYS).length === numberOfSkillsSelected;

  const toggleFiltersShown = () => setIsFiltersShown(!isFiltersShown);

  const toggleFilterCheck: MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    if (!(event.currentTarget instanceof HTMLButtonElement)) {
      return;
    }
    const { skillKey = '' } = event?.currentTarget?.dataset || {};
    if (selectedSkills.includes(skillKey)) {
      setSelectedSkills(selectedSkills.filter((each) => each !== skillKey));
    } else {
      setSelectedSkills([
        ...selectedSkills,
        skillKey,
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
          <SkillFilter
            onClick={toggleFiltersShown}
          >
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
                  key: skillKey,
                }: skillType): ReactElement => (
                  <SkillContainer
                    isChecked={(selectedSkills.includes(skillKey))}
                  >
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
          <SkillFilterHeaderRow>
            <SkillFilterHeader>Filters</SkillFilterHeader>
            <SkillFilterSelectAllBtn
              onClick={toggleSelectAllFilters}
            >
              <SkillFilterSelectAllSpan>
                {`${areAllSkillsSelected ? 'Clear' : 'Select'} all`}
              </SkillFilterSelectAllSpan>
            </SkillFilterSelectAllBtn>
          </SkillFilterHeaderRow>
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
                  data-skill-key={skillKey}
                  onClick={toggleFilterCheck}
                >
                  <Check />
                </SkillCheckBox>
              </SkillRow>
            );
          })}
        </SkillRows>
        <SkillFilterFooterRow>
          <SkillFilterHeader>
            {`${selectedProjects.length} projects`}
          </SkillFilterHeader>
          <SkillFilter onClick={toggleFiltersShown}>
            <SkillFilterSpan>
              Done
            </SkillFilterSpan>
          </SkillFilter>
        </SkillFilterFooterRow>
      </Aside>
    </>
  );
};

export default Projects;
