import weconnect from '../images/projects/weconnect.jpg';
import createWebpack from '../images/projects/createWebpack.jpg';
import skillRegistry from '../images/projects/skillRegistry.jpg';
import interviewDesktop from '../images/projects/interviewDesktop.jpg';
import interviewMobile from '../images/projects/interviewMobile.jpg';
import onlineTest from '../images/projects/onlineTest.jpg';
import weatherExtension from '../images/projects/weatherExtension.jpg';
import bookStore from '../images/projects/bookStore.jpg';
import todoList from '../images/projects/todoList.jpg';
import kataKuti from '../images/projects/katakuti.jpg';
import covid19 from '../images/projects/covid19.jpg';
import nodeReactAuth from '../images/projects/nodeReactAuth.jpg';
import blackboard from '../images/projects/blackboard.jpg';
import newyear from '../images/projects/newyear.jpg';
import christmas from '../images/projects/christmas.jpg';
import addabuzz from '../images/projects/addabuzz.jpg';

import SKILLSET, { skillType } from './skills';

const {
  HTML,
  CSS,
  JS,
  REACT,
  REDUX,
  SASS,
  WEBPACK,
  MONGO,
  NODE,
  FIREBASE,
  GRAPHQL,
  REACT_NATIVE,
  SOCKET,
  STYLED_COMPONENTS,
} = SKILLSET;

const projects = [
  {
    title: 'Addabuzz',
    image: addabuzz,
    subtitle: 'A virtual room for far off friends to hang out with each other.',
    link: 'https://addabuzz.herokuapp.com',
    skills: [REACT, STYLED_COMPONENTS, SOCKET, NODE],
  },
  {
    title: 'Blackboard',
    image: blackboard,
    subtitle: 'Blackboard makes note-taking easier with it\'s variety of tools. Tag them to boards or pin them to dashboard for easy access. Comment on your friends\' notes to let them know what you think.',
    link: 'https://black-board.netlify.app',
    skills: [REACT, SASS, GRAPHQL, MONGO, NODE],
  },
  {
    title: 'WeConnect',
    subtitle: 'A texting application to find and connect with your friends.',
    skills: [REACT, FIREBASE, SASS],
    link: 'https://we-connect.netlify.com',
    image: weconnect,
  },
  {
    title: 'Covid Statistics',
    subtitle: 'An overview of the damage caused by Covid-19 in the form of maps and charts.',
    skills: [REACT, SASS],
    link: 'https://covid-statistics.netlify.com',
    image: covid19,
  },
  {
    title: 'HNY 2021',
    image: newyear,
    subtitle: 'An animation to bring back the nostalgia of new-year greeting cards of the early 2000s.',
    link: 'https://greeting-card-hny.netlify.app',
    skills: [REACT, SASS],
  },
  {
    title: 'Merry Christmas',
    image: christmas,
    subtitle: 'A Christmas-themed CSS-enabled animation, meant for kids, but is enjoyed by people of all ages.',
    link: 'https://gift-box.netlify.app',
    skills: [REACT, SASS],
  },
  {
    title: 'node-react-auth',
    subtitle: 'A helper library to ease jwt authentication for node-react applications.',
    skills: [NODE, MONGO, REACT],
    link: 'https://www.npmjs.com/package/node-react-auth',
    image: nodeReactAuth,
  },
  {
    title: 'create-webpack-react-app',
    subtitle: 'A CLI to generate a boilerplate for React applications with necessary webpack and babel configurations.',
    skills: [NODE, WEBPACK, REACT],
    link: 'https://www.npmjs.com/package/create-webpack-react-app',
    image: createWebpack,
  },
  {
    title: 'Skill Registry',
    subtitle: 'An application to find employees in your organization based on skills, current project, etc.',
    skills: [NODE, MONGO, REACT, REDUX, CSS],
    link: 'https://skill-registry.netlify.com',
    image: skillRegistry,
  },
  {
    title: 'Interview Feedback - Web App',
    subtitle: 'A web application to store feedback about candidates applying for a position after an interview.',
    skills: [NODE, MONGO, REACT, REDUX, CSS],
    link: 'https://interview-feedback.netlify.com',
    image: interviewDesktop,
  },
  {
    title: 'Interview Feedback - Mobile App',
    subtitle: 'A mobile application to store feedback about candidates applying for a position after an interview.',
    skills: [NODE, MONGO, REDUX, REACT_NATIVE],
    link: 'https://expo.io/@himayan/feedback-app',
    image: interviewMobile,
  },
  {
    title: 'Online Test Platform',
    subtitle: 'An online test platform with a candidate portal for attending the exam and an admin portal for monitoring performances of candidates.',
    skills: [NODE, MONGO, REACT, REDUX, CSS],
    link: 'https://vimeo.com/300708908',
    image: onlineTest,
  },
  {
    title: 'Weather App Extension',
    subtitle: 'A weather app to give you real time weather information of any location around the world.',
    skills: [REACT, CSS],
    link: 'https://github.com/himayand21/weather-extension',
    image: weatherExtension,
  },
  {
    title: 'KataKuti',
    subtitle: 'The classic game of tic-tac-toe which can be played between two users, comes with an easy to beat AI.',
    skills: [REACT, JS, SASS, HTML],
    link: 'https://kata-kuti.netlify.com',
    image: kataKuti,
  },
  {
    title: 'Bookstore',
    subtitle: 'An e-commerce look-alike website to find your favorite book.',
    skills: [REACT, JS, CSS, HTML],
    link: 'https://vimeo.com/300492070',
    image: bookStore,
  },
  {
    title: 'To Do List',
    subtitle: 'A simple To-Do list application to store reminders.',
    skills: [JS, CSS, HTML],
    link: 'https://github.com/himayand21/myProjects/blob/master/ToDoList.html',
    image: todoList,
  },
];

export default projects;

export type projectInfoType = {
  title: string,
  subtitle: string,
  image: string,
  link: string,
  skills: skillType[],
};
