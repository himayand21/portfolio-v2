import { MouseEventHandler, ReactElement } from 'react';

import Check from '../../icons/Check';
import { projectInfoType } from '../../metadata/projects';
import skills, { skillType } from '../../metadata/skills';

import {
  SkillImage,
  SkillFilterToggler,
  SkillFilterSpan,
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

type skillContentProps = {
    toggleFilterCheck: MouseEventHandler<HTMLButtonElement>,
    toggleFiltersShown: () => void,
    toggleSelectAllFilters: () => void,
    areAllSkillsSelected: boolean,
    selectedSkills: string[],
    selectedProjects: projectInfoType[],
}

const SkillContent = ({
  toggleFilterCheck,
  toggleFiltersShown,
  toggleSelectAllFilters,
  areAllSkillsSelected,
  selectedSkills,
  selectedProjects,
}: skillContentProps): ReactElement => (
  <>
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
      <SkillFilterToggler onClick={toggleFiltersShown}>
        <SkillFilterSpan>
          Done
        </SkillFilterSpan>
      </SkillFilterToggler>
    </SkillFilterFooterRow>
  </>
);

export default SkillContent;
