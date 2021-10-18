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
  CoverImageDummy,
  DisplayImageDummy,
} from './styles/profileStyles';

import {
  FeedWrapper,
  Feed,
  Header,
} from './styles/feedStyles';

import {
  Aside,
  AsideBlock,
  AsideBlockTitle,
  AsideBlockItem,
  AsideItemImage,
  AsideItemInfoWrapper,
  AsideItemTitle,
  AsideItemSubtitle,
} from './styles/asideStyles';

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
  TimelineLink,
  TimelineLinkImage,
  TimelineLinkDivider,
  TimelineLinkInfoWrapper,
  TimelineLinkTitle,
  TimelineLinkSubtitle,
} from './styles/timelineStyles';

import profileInfo, { profilerowType } from '../../metadata/profileInfo';
import asideFeed, { asideFeedType, asiderowType } from '../../metadata/asideFeed';
import timeline, { types, timelineType } from '../../metadata/timeline';

import Cover from '../../images/Cover.jpg';
import Display from '../../images/Display.jpg';
import PreloadImage from '../../common/PreloadImage';

type ProfileProps = {
  ambience: string,
};

const Profile = ({
  ambience,
}: ProfileProps): ReactElement => (
  <FeedWrapper>
    <Feed>
      <Header>Profile</Header>
      <ProfileImageWrapper>
        <CoverImageDummy />
        <DisplayImageDummy />
        <PreloadImage src={Cover}>
          <CoverImage src={Cover} alt="" />
        </PreloadImage>
        <PreloadImage src={Display}>
          <DisplayImage src={Display} alt="" />
        </PreloadImage>
      </ProfileImageWrapper>
      <ProfileInfoContainer>
        <Name>Himayan Debnath</Name>
        <ProfileInfoWrapper>
          {profileInfo.map((row: profilerowType[]): ReactElement => (
            <ProfileRow>
              {row.map(({
                getIcon,
                label,
                link,
              }: profilerowType): ReactElement => (
                <Info key={label}>
                  <InfoLogo>
                    {getIcon()}
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
      {timeline.map((row: timelineType): ReactElement | null => {
        const {
          name,
          date,
          type,
        } = row;
        return (
          <TimelineItem key={date}>
            <Sender>
              <PreloadImage src={Display}>
                <SenderImage src={Display} alt="" />
              </PreloadImage>
              <SenderDetails>
                <SenderName>{name}</SenderName>
                <SenderDate>{date}</SenderDate>
              </SenderDetails>
            </Sender>
            {(() => {
              switch (type) {
                case types.LINK: {
                  const {
                    getTitle,
                    getSubTitle,
                    getImage = () => undefined,
                    link,
                  } = row;
                  return (
                    <TimelineLink target="blank" href={link}>
                      <PreloadImage src={getImage(ambience) || ''}>
                        <>
                          <TimelineLinkImage alt="" src={getImage(ambience)} />
                          <TimelineLinkDivider />
                        </>
                      </PreloadImage>
                      <TimelineLinkInfoWrapper>
                        <TimelineLinkTitle>{getTitle()}</TimelineLinkTitle>
                        <TimelineLinkSubtitle>{getSubTitle()}</TimelineLinkSubtitle>
                      </TimelineLinkInfoWrapper>
                    </TimelineLink>
                  );
                }
                case types.EVENT: {
                  const {
                    getIcon = () => undefined,
                    getTitle,
                    getSubTitle,
                  } = row;
                  return (
                    <TimelineInfo>
                      <TimelineIcon>
                        {getIcon()}
                      </TimelineIcon>
                      <TimelineInfoTitle>{getTitle()}</TimelineInfoTitle>
                      <TimelineInfoSubtitle>{getSubTitle()}</TimelineInfoSubtitle>
                    </TimelineInfo>
                  );
                }
                default: return null;
              }
            })()}
          </TimelineItem>
        );
      })}
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
            getImage,
            link,
          }: asiderowType): ReactElement => (
            <AsideBlockItem href={link} target="blank">
              <AsideItemImage src={getImage(ambience)} alt="" />
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
