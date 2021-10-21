/* eslint-disable max-len */
import { ReactElement } from 'react';

import { Link } from '../../styles';
import {
  TimelineLinkSubtitle,
  TimelineLinkTitle,
  DescriptionWrapper,
  Description,
  DescriptionList,
  DescriptionListItem,
  ListContent,
  ListContentDescription,
  LeftBranch,
  ListBulletWrapper,
  RightBranch,
} from './styles/timelineStyles';

export const EducationTitle = (): ReactElement => (
  <TimelineLinkTitle>
    <span>Graduated from</span>
    <Link href="https://vit.ac.in" target="blank">
      VIT University
    </Link>
    <span>Vellore</span>
  </TimelineLinkTitle>
);

export const EducationSubtitle = (): ReactElement => (
  <TimelineLinkSubtitle>
    <div>Bachelor of Technology</div>
    <div>Electronics and Instrumentation Engineering</div>
    <div>
      <b>CGPA</b>
      <span> - 9.04</span>
    </div>
  </TimelineLinkSubtitle>
);

type ListBulletProps = {
    isFirst?: boolean,
    isLast?: boolean,
};

export const ListBullet = ({ isFirst, isLast }: ListBulletProps): ReactElement => (
  <ListBulletWrapper>
    <LeftBranch isFirst={isFirst} />
    <RightBranch isLast={isLast} />
  </ListBulletWrapper>
);

ListBullet.defaultProps = {
  isFirst: false,
  isLast: false,
};

export const WiproDescription = (): ReactElement => (
  <DescriptionWrapper>
    <Description>
      <span>During my tenure at </span>
      <b>Wipro</b>
      <span>, I learnt the tricks of the trade of being a front-end developer (including </span>
      <b>HTML, CSS, JavaScript and ReactJS</b>
      <span>). </span>
      <span>I transitioned from working on internal projects to developing </span>
      <b>large scale applications</b>
      <span> for the </span>
      <b>Apple</b>
      <span> account, a couple of noteworthy ones are -</span>
    </Description>
    <DescriptionList>
      <DescriptionListItem>
        <ListBullet isFirst />
        <ListContent>
          <b>Apple Search Ads Certification</b>
          <ListContentDescription>
            An application where the user can access training modules on Apple Search Ads guidelines, appear for the certification exam, and finally download the certificate on successful completion, or retake otherwise.
          </ListContentDescription>
          <Link href="http://certification-searchads.apple.com" target="blank">
            View Project
          </Link>
        </ListContent>
      </DescriptionListItem>
      <DescriptionListItem>
        <ListBullet isLast />
        <ListContent>
          <b>Graffiti</b>
          <ListContentDescription>
            An admin tool to manipulate, tag and bundle data gathered from Apple&apos;s marketing websites and export them in a desired format for further analysis.
          </ListContentDescription>
        </ListContent>
      </DescriptionListItem>
    </DescriptionList>
  </DescriptionWrapper>
);
