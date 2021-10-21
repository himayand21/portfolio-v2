import { ReactElement } from 'react';

import BabyCarriage from '../../icons/BabyCarriage';
import Graduation from '../../icons/Graduation';
import Org11 from '../../images/Org11.png';
import Org12 from '../../images/Org12.png';

import { AMBIENCE } from '../../constants';
import { EducationSubtitle, EducationTitle, WiproDescription } from '../../containers/profile/components';

export const types = {
  EVENT: 'EVENT',
  LINK: 'LINK',
};

const timeline = [{
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'June 2018',
  link: 'https://www.wipro.com',
  getDescription: WiproDescription,
  getImage: (ambience: string): string => {
    switch (ambience) {
      case AMBIENCE.BRIGHT: return Org11;
      case AMBIENCE.NIGHT: case AMBIENCE.DARK: return Org12;
      default: return Org11;
    }
  },
  getTitle: (): string => ('Wipro Technologies'),
  getSubTitle: (): string => 'Project Engineer | June 2018 - April 2020',
}, {
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'May 2018',
  getIcon: Graduation,
  getTitle: EducationTitle,
  getSubTitle: EducationSubtitle,
}, {
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'September 1996',
  getIcon: BabyCarriage,
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
  getDescription?: () => string | ReactElement,
  getImage?: (ambience: string) => string,
  getTitle: () => string | ReactElement,
  getSubTitle: () => string | ReactElement,
  link?: string,
}

export type timelineType = linkType & eventType;

export default timeline;
