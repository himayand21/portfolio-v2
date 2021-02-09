import { ReactElement } from 'react';

import {
  ProfileImageWrapper,
  CoverImage,
  DisplayImage,
  FeedWrapper,
  Feed,
  Aside,
} from './styles';

import Cover from '../../images/Cover.jpg';
import Display from '../../images/Display.jpg';

const Profile = (): ReactElement => (
  <FeedWrapper>
    <Feed>
      <ProfileImageWrapper>
        <CoverImage src={Cover} alt="" />
        <DisplayImage src={Display} alt="" />
      </ProfileImageWrapper>
    </Feed>
    <Aside />
  </FeedWrapper>
);

export default Profile;
