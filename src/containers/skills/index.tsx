import { ReactElement } from 'react';

import { Article } from '../../styles';
import {
  Title,
  Block,
  Left,
  Right,
  HexagonWrapper,
  GridContainer,
  HexagonSide,
} from './styles';

const Skills = (): ReactElement => (
  <Article>
    <Title>
      Skills
    </Title>
    <Block>
      <Left />
      <Right>
        <GridContainer>
          <HexagonWrapper isLeft isFirst>
            <HexagonSide />
            <HexagonSide />
            <HexagonSide />
          </HexagonWrapper>
          <HexagonWrapper isRight>
            <HexagonSide />
            <HexagonSide />
            <HexagonSide />
          </HexagonWrapper>
          <HexagonWrapper isLeft>
            <HexagonSide />
            <HexagonSide />
            <HexagonSide />
          </HexagonWrapper>
          <HexagonWrapper isRight>
            <HexagonSide />
            <HexagonSide />
            <HexagonSide />
          </HexagonWrapper>
        </GridContainer>
      </Right>
    </Block>
  </Article>
);

export default Skills;
