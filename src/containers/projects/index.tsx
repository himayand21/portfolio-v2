import {
  MouseEventHandler,
  ReactElement,
  useState,
  MouseEvent,
  useEffect,
  useRef,
} from 'react';

import { Article } from '../../styles';
import {
  Title,
  TitleRow,
  Subtitle,
  Grid,
  SkillImage,
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

import Filter from '../../icons/Filter';
import Check from '../../icons/Check';
import ProjectItem from './ProjectItem';

const Projects = (): ReactElement => {
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(Object.values(SKILL_KEYS));

  const filtersRef = useRef<HTMLDivElement>(null);

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

  const handleOutsideClick = (event: Event) => {
    const clickedOn = filtersRef.current;
    if (clickedOn) {
      if (!clickedOn?.contains(event.target as Node)) {
        event.preventDefault();
        setIsFiltersShown(false);
      }
    }
  };

  useEffect(() => {
    if (isFiltersShown) {
      document.addEventListener('click', handleOutsideClick, false);
      return (() => {
        document.removeEventListener('click', handleOutsideClick, false);
      });
    }
    return (() => undefined);
  }, [isFiltersShown]);

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
            <ProjectItem
              title={title}
              subtitle={subtitle}
              image={image}
              link={link}
              key={link}
              skills={projectSkills}
              selectedSkills={selectedSkills}
            />
          ))}
        </Grid>
      </Article>
      <Aside
        isFiltersShown={isFiltersShown}
        ref={filtersRef}
      >
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
        <SkillRows>
          {Object.entries(skills).map(([
            skillKey, {
              name,
              icon,
            }]: [string, skillType]): ReactElement => {
            const isChecked = selectedSkills.includes(skillKey);
            return (
              <SkillRow key={name}>
                <SkillInfo>
                  <SkillRowImageContainer>
                    <SkillImage src={icon} />
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
