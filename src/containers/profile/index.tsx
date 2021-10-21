import { ReactElement, useState } from 'react';

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
} from './styles/profileInfoStyles';

import {
  FeedWrapper,
  Feed,
  Header,
  HeaderWrapper,
  HighlightsIcon,
  CrossIcon,
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

import profileInfo, { profilerowType } from '../../metadata/profile/profileInfo';
import asideFeed, { asideFeedType, asiderowType } from '../../metadata/profile/asideFeed';
import timeline, { types, timelineType } from '../../metadata/profile/timeline';

import Cover from '../../images/Cover.jpg';
import Display from '../../images/Display.jpg';
import PreloadImage from '../../common/PreloadImage';
import Bars from '../../icons/Bars';
import Cross from '../../icons/Cross';

type ProfileProps = {
  ambience: string,
};

const Profile = ({
  ambience,
}: ProfileProps): ReactElement => {
  const [isHighlightsShown, setIsHighlightsShown] = useState(false);
  const toggleSetIsHighlightsShown = () => setIsHighlightsShown(!isHighlightsShown);
  return (
    <FeedWrapper>
      <Feed>
        <HeaderWrapper>
          <Header>Profile</Header>
          <HighlightsIcon onClick={toggleSetIsHighlightsShown}>
            <Bars />
          </HighlightsIcon>
        </HeaderWrapper>
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
            getDescription = () => undefined,
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
              {getDescription()}
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
      {isHighlightsShown && (
        <CrossIcon onClick={toggleSetIsHighlightsShown}>
          <Cross />
        </CrossIcon>
      )}
      <Aside
        isHighlightsShown={isHighlightsShown}
      >
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
};

export default Profile;
