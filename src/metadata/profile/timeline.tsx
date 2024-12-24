import { ReactElement } from 'react';

import BabyCarriage from '../../icons/BabyCarriage';
import Graduation from '../../icons/Graduation';
import Org11 from '../../images/highlights/Org11.png';
import Org12 from '../../images/highlights/Org12.png';
import Org21 from '../../images/highlights/Org21.png';
import Org22 from '../../images/highlights/Org22.png';
import Org3 from '../../images/highlights/Org3.png';
import Org4 from '../../images/highlights/Org4.png';

import { AMBIENCE } from '../../constants';
import {
  EducationSubtitle,
  EducationTitle,
  WiproDescription,
  SnapwizDescription,
  VedantuDescription,
  AtlassianDescription,
  WiproWorkExperience,
  SnapwizWorkExperience,
  VedantuWorkExperience,
  AtlassianWorkExperience,
} from '../../containers/profile/components';

export const types = {
  EVENT: 'EVENT',
  LINK: 'LINK',
};

const timeline = [{
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'June 2022',
  link: 'https://www.atlassian.com',
  getDescription: AtlassianDescription,
  getImage: (): string => Org4,
  getTitle: (): string => ('Atlassian'),
  getSubTitle: AtlassianWorkExperience,
}, {
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'October 2020',
  link: 'https://www.vedantu.com',
  getDescription: VedantuDescription,
  getImage: (): string => Org3,
  getTitle: (): string => ('Vedantu Innovations'),
  getSubTitle: VedantuWorkExperience,
}, {
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'April 2020',
  link: 'https://www.snapwiz.com',
  getDescription: SnapwizDescription,
  getImage: (ambience: string): string => {
    switch (ambience) {
      case AMBIENCE.BRIGHT: return Org21;
      case AMBIENCE.NIGHT: case AMBIENCE.DARK: return Org22;
      default: return Org21;
    }
  },
  getTitle: (): string => ('Snapwiz Edutec'),
  getSubTitle: SnapwizWorkExperience,
}, {
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
  getSubTitle: WiproWorkExperience,
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
  date: 'September',
  getIcon: BabyCarriage,
  getTitle: (): string => ('Born on September 21'),
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
