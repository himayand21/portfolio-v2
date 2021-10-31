import { ReactElement } from 'react';

import {
  Article,
  Title,
  Block,
  Right,
  HexagonWrapper,
  GridContainer,
  HexagonSide,
  SkillIcon,
} from './styles';
import { skillSet, skillSetType } from '../../metadata/skills';
import PreloadImage from '../../common/PreloadImage';

const getIndex = (
  skillSetArray: skillSetType[][],
  parentIndex: number,
  childIndex: number,
): number => {
  let count = childIndex;
  for (let i = 0; i < parentIndex; i += 1) {
    count += skillSetArray[i].length;
  }
  return count;
};

const Skills = (): ReactElement => (
  <Article>
    <Title>
      Skills
    </Title>
    <Block>
      <Right>
        <GridContainer>
          {skillSet.map((proficiencyLevel: skillSetType[], parentIndex: number): ReactElement => (
            <>
              {proficiencyLevel.map((each: skillSetType, childIndex: number): ReactElement => {
                const index = getIndex(skillSet, parentIndex, childIndex);
                return (
                  <HexagonWrapper
                    isLeft={((index + 1) % 2) === 1}
                    isFirst={(index === 0)}
                    isRight={((index + 1) % 2) === 0}
                  >
                    <HexagonSide />
                    <HexagonSide>
                      <PreloadImage src={each.icon}>
                        <SkillIcon src={each.icon} />
                      </PreloadImage>
                    </HexagonSide>
                    <HexagonSide />
                  </HexagonWrapper>
                );
              })}
            </>
          ))}
        </GridContainer>
      </Right>
    </Block>
  </Article>
);

export default Skills;
