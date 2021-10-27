import HTML from '../images/skills/html.png';
import CSS from '../images/skills/css.png';
import JS from '../images/skills/js.png';
import React from '../images/skills/react.png';
import Redux from '../images/skills/redux.png';
import Sass from '../images/skills/sass.png';

export const skillSet = [
  [
    {
      name: 'HTML5',
      icon: HTML,
    },
    {
      name: 'CSS3',
      icon: CSS,
    },
    {
      name: 'JavaScript',
      icon: JS,
    },
    {
      name: 'React',
      icon: React,
    },
    {
      name: 'Redux',
      icon: Redux,
    },
    {
      name: 'Sass',
      icon: Sass,
    },
  ],
];

export type skillSetType = {
    name: string,
    icon: string
};
