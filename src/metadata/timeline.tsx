import { ReactElement } from 'react';

import BabyCarriage from '../icons/BabyCarriage';
import Graduation from '../icons/Graduation';
import Org11 from '../images/Org11.png';
import Org12 from '../images/Org12.png';

import Link from '../common/Link';
import { AMBIENCE } from '../constants';

const EducationTitle = (): ReactElement => (
  <div>
    <span>Graduated from</span>
    <Link href="https://vit.ac.in" target="blank">
      VIT University
    </Link>
    <span>Vellore</span>
  </div>
);

const EducationSubtitle = (): ReactElement => (
  <>
    <div>Bachelor of Technology</div>
    <div>Electronics and Instrumentation Engineering</div>
    <div>
      <b>CGPA</b>
      <span> - 9.04</span>
    </div>
  </>
);

export const types = {
  EVENT: 'EVENT',
  LINK: 'LINK',
};

const timeline = [{
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'June 2018',
  getImage: (ambience: string): string => {
    switch (ambience) {
      case AMBIENCE.BRIGHT: return Org11;
      case AMBIENCE.NIGHT: case AMBIENCE.DARK: return Org12;
      default: return Org11;
    }
  },
  getTitle: (): string => ('Wipro Technologies'),
  getSubTitle: (): string => 'Project Engineer | June 2018 - April 2020',
  link: 'https://www.wipro.com',
}, {
  getIcon: Graduation,
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'May 2018',
  getTitle: EducationTitle,
  getSubTitle: EducationSubtitle,
}, {
  getIcon: BabyCarriage,
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'September 1996',
  getTitle: (): string => ('Born on September 21, 1996'),
  getSubTitle: (): string => 'Kolkata, West Bengal',
}];

export type eventType = {
  getIcon?: () => string | ReactElement,
  type: string,
  name: string,
  date: string,
  getTitle: () => string | ReactElement,
  getSubTitle: () => string | ReactElement,
};

export type linkType = {
  type: string,
  name: string,
  date: string,
  getImage?: (ambience: string) => string,
  getTitle: () => string | ReactElement,
  getSubTitle: () => string | ReactElement,
  link?: string,
}

export type timelineType = linkType & eventType;

export default timeline;
