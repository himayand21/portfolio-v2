import { ReactElement } from 'react';

import Birthday from '../icons/Birthday';
import Location from '../icons/Location';
import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';
import Twitter from '../icons/Twitter';

const profileInfo = [
  [
    {
      getIcon: Location,
      label: 'Bengaluru',
    },
    {
      getIcon: Birthday,
      label: 'September 21, 1996',
    },
  ], [
    {
      getIcon: Github,
      label: '@himayand21',
      link: 'https://github.com/himayand21',
    }, {
      getIcon: Twitter,
      label: '@himayan7',
      link: 'https://twitter.com/Himayan7',
    },
    {
      getIcon: LinkedIn,
      label: '@himayan-debnath',
      link: 'https://www.linkedin.com/in/himayan-debnath',
    },
  ],
];

export type profilerowType = {
  getIcon: () => ReactElement,
  label: string,
  link?: string,
};

export default profileInfo;
