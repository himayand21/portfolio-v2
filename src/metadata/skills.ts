import Html from '../images/skills/html.png';
import Css from '../images/skills/css.png';
import Js from '../images/skills/js.png';
import React from '../images/skills/react.png';
import Redux from '../images/skills/redux.png';
import Sass from '../images/skills/sass.png';
import Webpack from '../images/skills/webpack.png';
import Mongo from '../images/skills/mongo.png';
import Node from '../images/skills/node.png';
import Firebase from '../images/skills/firebase.png';
import GraphQL from '../images/skills/graphql.png';
import Socket from '../images/skills/socket.png';
import Ts from '../images/skills/ts.png';
import TestingLibrary from '../images/skills/testingLibrary.png';
import Jest from '../images/skills/jest.png';
import Puppeteer from '../images/skills/puppeteer.png';
import StyledComponents from '../images/skills/styledComponents.png';

export const SKILL_KEYS = {
  HTML: 'HTML',
  CSS: 'CSS',
  JS: 'JS',
  REACT: 'REACT',
  REDUX: 'REDUX',
  SASS: 'SASS',
  STYLED_COMPONENTS: 'STYLED_COMPONENTS',
  TS: 'TS',
  SOCKET: 'SOCKET',
  WEBPACK: 'WEBPACK',
  TESTING_LIBRARY: 'TESTING_LIBRARY',
  JEST: 'JEST',
  REACT_NATIVE: 'REACT_NATIVE',
  GRAPHQL: 'GRAPHQL',
  FIREBASE: 'FIREBASE',
  PUPPETEER: 'PUPPETEER',
  NODE: 'NODE',
  MONGO: 'MONGO',
};

const skills = {
  [SKILL_KEYS.HTML]: {
    name: 'HTML5',
    icon: Html,
    key: SKILL_KEYS.HTML,
  },
  [SKILL_KEYS.CSS]: {
    name: 'CSS3',
    icon: Css,
    key: SKILL_KEYS.CSS,
  },
  [SKILL_KEYS.JS]: {
    name: 'JavaScript',
    icon: Js,
    key: SKILL_KEYS.JS,
  },
  [SKILL_KEYS.REACT]: {
    name: 'React',
    icon: React,
    key: SKILL_KEYS.REACT,
  },
  [SKILL_KEYS.REDUX]: {
    name: 'Redux',
    icon: Redux,
    key: SKILL_KEYS.REDUX,
  },
  [SKILL_KEYS.SASS]: {
    name: 'SCSS',
    icon: Sass,
    key: SKILL_KEYS.SASS,
  },
  [SKILL_KEYS.STYLED_COMPONENTS]: {
    name: 'Styled Components',
    icon: StyledComponents,
    key: SKILL_KEYS.STYLED_COMPONENTS,
  },
  [SKILL_KEYS.TS]: {
    name: 'TypeScript',
    icon: Ts,
    key: SKILL_KEYS.TS,
  },
  [SKILL_KEYS.SOCKET]: {
    name: 'Socket IO',
    icon: Socket,
    key: SKILL_KEYS.SOCKET,
  },
  [SKILL_KEYS.WEBPACK]: {
    name: 'Webpack',
    icon: Webpack,
    key: SKILL_KEYS.WEBPACK,
  },
  [SKILL_KEYS.TESTING_LIBRARY]: {
    name: 'Testing Library',
    icon: TestingLibrary,
    key: SKILL_KEYS.TESTING_LIBRARY,
  },
  [SKILL_KEYS.JEST]: {
    name: 'Jest',
    icon: Jest,
    key: SKILL_KEYS.JEST,
  },
  [SKILL_KEYS.REACT_NATIVE]: {
    name: 'React Native',
    icon: React,
    key: SKILL_KEYS.REACT_NATIVE,
  },
  [SKILL_KEYS.GRAPHQL]: {
    name: 'GraphQL',
    icon: GraphQL,
    key: SKILL_KEYS.GRAPHQL,
  },
  [SKILL_KEYS.FIREBASE]: {
    name: 'Firebase',
    icon: Firebase,
    key: SKILL_KEYS.FIREBASE,
  },
  [SKILL_KEYS.PUPPETEER]: {
    name: 'Puppeteer',
    icon: Puppeteer,
    key: SKILL_KEYS.PUPPETEER,
  },
  [SKILL_KEYS.NODE]: {
    name: 'NodeJS',
    icon: Node,
    key: SKILL_KEYS.NODE,
  },
  [SKILL_KEYS.MONGO]: {
    name: 'MongoDB',
    icon: Mongo,
    key: SKILL_KEYS.MONGO,
  },
};

export default skills;

export type skillType = {
  name: string,
  icon: string,
  key: string,
};
