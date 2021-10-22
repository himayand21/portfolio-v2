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
  WorkExperienceContent,
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
  <ListBulletWrapper isLast={isLast}>
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
      <b>HTML, CSS, JavaScript, ReactJS, Redux</b>
      <span> etc). </span>
      <span>I transitioned from working on internal projects to developing </span>
      <b>large scale applications</b>
      <span> for the </span>
      <b>Apple</b>
      <span> account. A couple of noteworthy ones are -</span>
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

export const SnapwizDescription = (): ReactElement => (
  <DescriptionWrapper>
    <Description>
      <span>At </span>
      <b>Snapwiz</b>
      <span>, I was responsible for developing new and upcoming featues for their education platform -</span>
      <Link href="https://edulastic.com" target="blank">
        Edulastic
      </Link>
      <span>. It is a technology-enhanced assessment solution for teachers and school administrators. Here, I got introduced to tools like </span>
      <b>redux-saga</b>
      <span> and </span>
      <b>styled-components</b>
      <span>. I also gained project experience in working with back-end technologies like </span>
      <b>NodeJS</b>
      <span> and </span>
      <b>MongoDB</b>
      <span>.</span>
    </Description>
  </DescriptionWrapper>
);

export const VedantuDescription = (): ReactElement => (
  <DescriptionWrapper>
    <Description>
      <span>At </span>
      <b>Vedantu</b>
      <span>, I am part of the </span>
      <b>WAVE</b>
      <span> team, which is instrumental in enhancing LIVE classroom experience. Here, I got introduced to technologies like </span>
      <b>PaperJS</b>
      <span> and </span>
      <b>socket.io</b>
      <span>. I have been responsible for shipping top-tier features like -</span>
    </Description>
    <DescriptionList>
      <DescriptionListItem>
        <ListBullet isFirst />
        <ListContent>
          <b>Fill in the Blanks and Subjective Questions</b>
          <ListContentDescription>
            These features have massively improved student&apos;s interactivity and immersion, and have provided yet another way for evaluation in LIVE classes.
          </ListContentDescription>
        </ListContent>
      </DescriptionListItem>
      <DescriptionListItem>
        <ListBullet />
        <ListContent>
          <b>UI Revamp</b>
          <ListContentDescription>
            We went through a massive design overhaul touching almost every other modules of the application. It has progressed the user experience to a more slick, polished and modern UI suitable for the students of today.
          </ListContentDescription>
        </ListContent>
      </DescriptionListItem>
      <DescriptionListItem>
        <ListBullet isLast />
        <ListContent>
          <b>Design System</b>
          <ListContentDescription>
            <span>I worked in collaboration with the design team on introducing a </span>
            <b>CSS library with atomic classnames</b>
            <span> fulfilling all the styling needs and choices of the WAVE platform. It aims at helping developers get up and running with building new features in no time with platform-standardised CSS at hand.</span>
          </ListContentDescription>
        </ListContent>
      </DescriptionListItem>
    </DescriptionList>
  </DescriptionWrapper>
);

export const VedantuWorkExperience = (): ReactElement => (
  <>
    <DescriptionListItem>
      <ListBullet isFirst />
      <WorkExperienceContent>
        SDE - 1 (October 2020 - April 2021)
      </WorkExperienceContent>
    </DescriptionListItem>
    <DescriptionListItem>
      <ListBullet isLast />
      <WorkExperienceContent>
        SDE - 2 (April 2021 - now)
      </WorkExperienceContent>
    </DescriptionListItem>
  </>
);
