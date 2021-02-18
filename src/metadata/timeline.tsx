import { Component, ReactElement } from 'react';
import styled from 'styled-components';

import BabyCarriage from '../icons/BabyCarriage';
import Graduation from '../icons/Graduation';
import Org1 from '../images/Org1.png';

const Link = styled.a`
  color: ${({ theme }) => theme.color};
  font-weight: 400;
  margin: 0 4px;
`;

const VIT = () => (
  <div>
    <span>Graduated from</span>
    <Link href="https://vit.ac.in" target="blank">
      VIT University
    </Link>
    <span>Vellore</span>
  </div>
);

export const types = {
  EVENT: 'EVENT',
  LINK: 'LINK',
};

const timeline = [{
  type: types.LINK,
  name: 'Himayan Debnath',
  date: 'July 2018',
  image: Org1,
  title: 'Wipro Technologies',
  subtitle: 'To my first job and new beginnings.',
  link: 'https://www.wipro.com',
}, {
  icon: Graduation,
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'May 2018',
  title: <VIT />,
  subtitle: 'Bachelor of Technology in Electronics and Instrumentation Engineering',
}, {
  icon: BabyCarriage,
  type: types.EVENT,
  name: 'Himayan Debnath',
  date: 'September 1996',
  title: 'Born on September 21, 1996',
  subtitle: 'Kolkata, West Bengal',
}];

export type eventType = {
  icon: typeof Component,
  type: string,
  name: string,
  date: string,
  title: string | ReactElement,
  subtitle: string,
};

export type linkType = {
  type: string,
  name: string,
  date: string,
  image: string,
  title: string,
  subtitle: string,
  link: string,
}

export type timelineType = linkType & eventType;

export default timeline;
