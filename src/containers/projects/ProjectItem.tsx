import { useRef, ReactElement } from 'react';

import PreloadImage from '../../common/PreloadImage';
import { projectInfoType } from '../../metadata/projects';
import { skillType } from '../../metadata/skills';

import {
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

type skillItemPropTypes = {
    isChecked: boolean,
    icon: string,
    name: string,
}

export const SkillItem = ({
  isChecked,
  icon,
  name,
}: skillItemPropTypes): ReactElement => {
  const imageRef = useRef<HTMLImageElement>(null);
  return (
    <SkillContainer
      isChecked={isChecked}
    >
      <SkillImageContainer>
        <PreloadImage imageRef={imageRef}>
          <SkillImage
            src={icon}
            ref={imageRef}
            alt=""
          />
        </PreloadImage>
      </SkillImageContainer>
      <SkillLabel>{name}</SkillLabel>
    </SkillContainer>
  );
};

type projectItemPropTypes = projectInfoType & { selectedSkills: string[] };

const ProjectItem = ({
  title,
  subtitle,
  skills,
  image,
  link,
  selectedSkills,
}: projectItemPropTypes): ReactElement => {
  const imageRef = useRef<HTMLImageElement>(null);
  return (
    <GridItem
      href={link}
      target="blank"
    >
      <PreloadImage imageRef={imageRef}>
        <ProjectImage
          src={image}
          className="project-image"
          ref={imageRef}
          loading="lazy"
          alt=""
        />
      </PreloadImage>
      <DescriptionOverlay>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubTitle>{subtitle}</ProjectSubTitle>
      </DescriptionOverlay>
      <SkillsContainer>
        {skills.map(({
          icon,
          name,
          key: skillKey,
        }: skillType): ReactElement => (
          <SkillItem
            isChecked={(selectedSkills.includes(skillKey))}
            name={name}
            icon={icon}
            key={name}
          />
        ))}
      </SkillsContainer>
    </GridItem>
  );
};

export default ProjectItem;
