import { ReactElement } from 'react';

import {
  ProfileImageWrapper,
  CoverImage,
  DisplayImage,
  ProfileInfoContainer,
  Name,
  ProfileInfoWrapper,
  ProfileRow,
  Info,
  InfoLogo,
  InfoSpan,
  InfoLink,
} from './profileStyles';

import {
  FeedWrapper,
  Feed,
  Header,
} from './feedStyles';

import {
  Aside,
  AsideBlock,
  AsideBlockTitle,
  AsideBlockItem,
  AsideItemImage,
  AsideItemInfoWrapper,
  AsideItemTitle,
  AsideItemSubtitle,
} from './asideStyles';

import {
  TimelineItem,
  Sender,
  SenderImage,
  SenderName,
  SenderDetails,
  SenderDate,
  TimelineInfo,
  TimelineInfoTitle,
  TimelineInfoSubtitle,
  TimelineIcon,
} from './timelineStyles';

import profileInfo, { profilerowType } from '../../metadata/profileInfo';
import asideFeed, { asideFeedType, asiderowType } from '../../metadata/asideFeed';
import timeline from '../../metadata/timeline';

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
          {profileInfo.map((row: profilerowType[]): ReactElement => (
            <ProfileRow>
              {row.map(({ icon: Icon, label, link }: profilerowType): ReactElement => (
                <Info key={label}>
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
      {timeline.map(({
        icon: Icon,
        name,
        date,
        title,
        subtitle,
      }): ReactElement => (
        <TimelineItem>
          <Sender>
            <SenderImage src={Display} alt="" />
            <SenderDetails>
              <SenderName>{name}</SenderName>
              <SenderDate>{date}</SenderDate>
            </SenderDetails>
          </Sender>
          <TimelineInfo>
            <TimelineIcon>
              <Icon />
            </TimelineIcon>
            <TimelineInfoTitle>{title}</TimelineInfoTitle>
            <TimelineInfoSubtitle>{subtitle}</TimelineInfoSubtitle>
          </TimelineInfo>
        </TimelineItem>
      ))}
    </Feed>
    <Aside>
      {asideFeed.map(({
        type,
        items,
      }: asideFeedType): ReactElement => (
        <AsideBlock key={type}>
          <AsideBlockTitle>
            {type}
          </AsideBlockTitle>
          {items.map(({
            title,
            subtitle,
            image,
            link,
          }: asiderowType): ReactElement => (
            <AsideBlockItem href={link} target="blank">
              <AsideItemImage src={image} alt="" />
              <AsideItemInfoWrapper>
                <AsideItemTitle>
                  {title}
                </AsideItemTitle>
                <AsideItemSubtitle>
                  {subtitle}
                </AsideItemSubtitle>
              </AsideItemInfoWrapper>
            </AsideBlockItem>
          ))}
        </AsideBlock>
      ))}
    </Aside>
  </FeedWrapper>
);

export default Profile;
