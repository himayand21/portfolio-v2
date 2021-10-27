import { ReactElement } from 'react';

import {
  Article,
  Title,
  Block,
  Left,
  Right,
  HexagonWrapper,
  GridContainer,
  HexagonSide,
  SkillLabel,
  SkillIcon,
} from './styles';
import { skillSet, skillSetType } from '../../metadata/skills';
import PreloadImage from '../../common/PreloadImage';

const Skills = (): ReactElement => {
  const allIcons = skillSet.reduce((acc: string[], proficiencyLevel: skillSetType[]) => ([
    ...acc,
    ...proficiencyLevel.map((each) => each.icon),
  ]), []);
  return (
    <Article>
      <Title>
        Skills
      </Title>
      <Block>
        <Left>
          {skillSet.map((proficiencyLevel: skillSetType[]): ReactElement => (
            <>
              {proficiencyLevel.map((each: skillSetType): ReactElement => (
                <SkillLabel>
                  {each.name}
                </SkillLabel>
              ))}
            </>
          ))}
        </Left>
        <Right>
          <GridContainer>
            {allIcons.map((each: string, index: number): ReactElement => (
              <HexagonWrapper
                isLeft={((index + 1) % 2) === 1}
                isFirst={(index === 0)}
                isRight={((index + 1) % 2) === 0}
              >
                <HexagonSide />
                <HexagonSide>
                  <PreloadImage src={each}>
                    <SkillIcon src={each} />
                  </PreloadImage>
                </HexagonSide>
                <HexagonSide />
              </HexagonWrapper>
            ))}
          </GridContainer>
        </Right>
      </Block>
    </Article>
  );
};

export default Skills;
