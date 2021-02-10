import { ReactElement } from 'react';

import {
  ProfileImageWrapper,
  CoverImage,
  DisplayImage,
  FeedWrapper,
  Feed,
  Aside,
  Header,
  ProfileInfoContainer,
  Name,
  ProfileInfoWrapper,
  ProfileRow,
  Info,
  InfoLogo,
  InfoSpan,
  InfoLink,
} from './styles';

import profileInfo, { rowType } from '../../metadata/profileInfo';

import Cover from '../../images/Cover.jpg';
import Display from '../../images/Display.jpg';

const Profile = (): ReactElement => (
  <FeedWrapper>
    <Feed>
      <Header>Profile</Header>
      <ProfileImageWrapper>
        <CoverImage src={Cover} alt="" />
        <DisplayImage src={Display} alt="" />
      </ProfileImageWrapper>
      <ProfileInfoContainer>
        <Name>Himayan Debnath</Name>
        <ProfileInfoWrapper>
          {profileInfo.map((row: rowType[]) => (
            <ProfileRow>
              {row.map(({ icon: Icon, label, link }: rowType): ReactElement => (
                <Info>
                  <InfoLogo>
                    <Icon />
                  </InfoLogo>
                  {link ? (
                    <InfoLink
                      href={link}
                      target="blank"
                    >
                      {label}
                    </InfoLink>
                  ) : (
                    <InfoSpan>{label}</InfoSpan>
                  )}
                </Info>
              ))}
            </ProfileRow>
          ))}
        </ProfileInfoWrapper>
      </ProfileInfoContainer>
    </Feed>
    <Aside />
  </FeedWrapper>
);

export default Profile;
