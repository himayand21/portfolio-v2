import { ReactElement } from 'react';

// import Birthday from '../../icons/Birthday';
import Location from '../../icons/Location';
import Job from '../../icons/Job';
import LinkedIn from '../../icons/LinkedIn';
import Github from '../../icons/Github';
import Twitter from '../../icons/Twitter';

const location = {
  getIcon: Location,
  label: 'Bengaluru',
};

// const birthday = {
//   getIcon: Birthday,
//   label: 'September 21',
// };

const job = {
  getIcon: Job,
  label: 'Software Engineer 3 at Vedantu',
};

export const profileInfo = [location, job];

export const bioInfo = [
  'Hey there! I am a front-end developer trying to make the web a better place. I am passionate about quality software, responsive UI and clean code. When I am not picking my brain trying to name a variable in front of a computer 👨🏾‍💻, I am trying new recipes in the kitchen 👨🏾‍🍳 or struggling to play the E chord on my ukulele 🎸.',
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
