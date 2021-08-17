import { FC } from 'react';

import Birthday from '../icons/Birthday';
import Location from '../icons/Location';
import LinkedIn from '../icons/LinkedIn';
import Github from '../icons/Github';
import Twitter from '../icons/Twitter';

const profileInfo = [
  [
    {
      icon: Location,
      label: 'Bengaluru',
    },
    {
      icon: Birthday,
      label: 'September 21, 1996',
    },
  ], [
    {
      icon: Github,
      label: '@himayand21',
      link: 'https://github.com/himayand21',
    }, {
      icon: Twitter,
      label: '@himayan7',
      link: 'https://twitter.com/Himayan7',
    },
    {
      icon: LinkedIn,
      label: '@himayan-debnath',
      link: 'https://www.linkedin.com/in/himayan-debnath',
    },
  ],
];

export type profilerowType = {
  icon: FC,
  label: string,
  link?: string,
};

export default profileInfo;
