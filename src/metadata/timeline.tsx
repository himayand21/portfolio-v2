import styled from 'styled-components';

import BabyCarriage from '../icons/BabyCarriage';
import Graduation from '../icons/Graduation';

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

const timeline = [{
  icon: Graduation,
  event: true,
  name: 'Himayan Debnath',
  date: 'May 2018',
  title: <VIT />,
  subtitle: 'Bachelor of Technology in Electronics and Instrumentation Engineering',
}, {
  icon: BabyCarriage,
  event: true,
  name: 'Himayan Debnath',
  date: 'September 1996',
  title: 'Born on September 21, 1996',
  subtitle: 'Kolkata, West Bengal',
}];

export default timeline;
