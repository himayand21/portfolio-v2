import { ReactElement } from 'react';

import Birthday from '../../icons/Birthday';
import Location from '../../icons/Location';
import LinkedIn from '../../icons/LinkedIn';
import Github from '../../icons/Github';
import Twitter from '../../icons/Twitter';

export const profileInfo = [{
  getIcon: Location,
  label: 'Bengaluru',
},
{
  getIcon: Birthday,
  label: 'September 21, 1996',
}];

export const bioInfo = [
  'Hey there! I am a front-end developer and I am trying to make the web a better place. I am passionate about quality software, responsive websites and clean code. When I am not picking my brain in front of a computer trying to name a variable, I am either perfecting my French Omelette (love cooking) or trying to play the E chord on my ukulele (new hobby).',
  'If you have any suggestions or queries about my work, or would just like to discuss some awesome project ideas, you can reach out to me following the links below -',
];

export const contactInfo = [{
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
];

export type profilerowType = {
  getIcon: () => ReactElement,
  label: string,
  link?: string,
};
