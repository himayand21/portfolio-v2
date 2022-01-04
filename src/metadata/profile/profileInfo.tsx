import { ReactElement } from 'react';

// import Birthday from '../../icons/Birthday';
import Location from '../../icons/Location';
import Job from '../../icons/Job';
import LinkedIn from '../../icons/LinkedIn';
import Github from '../../icons/Github';
import StackOverflow from '../../icons/StackOverflow';
import Medium from '../../icons/Medium';

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

const BioFirst = () => (
  <span>
    Hey there! I am a
    <b> front-end developer </b>
    trying to make the web a better place.
    I am passionate about
    <b> quality software, responsive UI </b>
    and
    <b> clean code</b>
    . When I am not picking my brain trying to name a variable in front of a computer 👨🏾‍💻,
    I am trying new recipes in the kitchen 👨🏾‍🍳
    or struggling to play the E chord on my ukulele 🎸
  </span>
);

export const bioInfo = [
  <BioFirst />,
];

export const contactInfo = [{
  getIcon: LinkedIn,
  label: '@himayan',
  link: 'https://www.linkedin.com/in/himayan',
}, {
  getIcon: Github,
  label: '@himayand21',
  link: 'https://github.com/himayand21',
}, {
  getIcon: StackOverflow,
  label: '@himayan',
  link: 'https://stackoverflow.com/users/11737993/himayan',
}, {
  getIcon: Medium,
  label: '@himayandebnath',
  link: 'https://himayandebnath.medium.com',
}];

export type profilerowType = {
  getIcon: () => ReactElement,
  label: string,
  link?: string,
};
