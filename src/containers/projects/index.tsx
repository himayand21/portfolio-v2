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
  SkillFilterTogglerFixed,
  SkillFilterSpan,
  SkillFilterBadge,
  SkillFilterIcon,
  Aside,
} from './styles';

import projects, { projectInfoType, allSkills } from '../../metadata/projects';
import { skillType } from '../../metadata/skills';

import Filter from '../../icons/Filter';
import ProjectItem from './ProjectItem';
import SkillContent from './SkillContent';

const Projects = (): ReactElement => {
  const [isFiltersShown, setIsFiltersShown] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState(allSkills);

  const filtersRef = useRef<HTMLDivElement>(null);

  const numberOfSkillsSelected = selectedSkills.length;

  const areAllSkillsSelected = allSkills.length === numberOfSkillsSelected;

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
      setSelectedSkills(allSkills);
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
          <SkillFilterTogglerFixed
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
          </SkillFilterTogglerFixed>
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
        <SkillContent
          toggleFilterCheck={toggleFilterCheck}
          toggleFiltersShown={toggleFiltersShown}
          toggleSelectAllFilters={toggleSelectAllFilters}
          areAllSkillsSelected={areAllSkillsSelected}
          selectedSkills={selectedSkills}
          selectedProjects={selectedProjects}
        />
      </Aside>
    </>
  );
};

export default Projects;
