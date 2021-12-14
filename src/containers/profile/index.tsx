import {
  ReactElement,
  useEffect,
  useState,
  useRef,
} from 'react';

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
  BioText,
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

import { Pill, PillContent } from '../../styles';

import {
  profileInfo, contactInfo, bioInfo, profilerowType,
} from '../../metadata/profile/profileInfo';
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

  const highlightsRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: Event) => {
    const clickedOn = highlightsRef.current;
    if (clickedOn) {
      if (!clickedOn?.contains(event.target as Node)) {
        event.preventDefault();
        setIsHighlightsShown(false);
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isHighlightsShown) {
      document.addEventListener('click', handleOutsideClick, false);
      return (() => {
        document.removeEventListener('click', handleOutsideClick, false);
      });
    }
    return (() => undefined);
  }, [isHighlightsShown]);

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
            <ProfileRow>
              {profileInfo.map(({
                getIcon,
                label,
              }: profilerowType): ReactElement => (
                <Info key={label}>
                  <InfoLogo>
                    {getIcon()}
                  </InfoLogo>
                  <InfoSpan>{label}</InfoSpan>
                </Info>
              ))}
            </ProfileRow>
            <ProfileRow>
              {bioInfo.map((text) => (
                <BioText as="div">{text}</BioText>
              ))}
            </ProfileRow>
            <ProfileRow>
              {contactInfo.map(({
                getIcon,
                label,
                link,
              }: profilerowType): ReactElement => (
                <Info key={label}>
                  <InfoLogo>
                    {getIcon()}
                  </InfoLogo>
                  <InfoLink
                    href={link}
                    target="blank"
                  >
                    {label}
                  </InfoLink>
                </Info>
              ))}
            </ProfileRow>
          </ProfileInfoWrapper>
          <Pill>
            <PillContent>
              TIMELINE
            </PillContent>
          </Pill>
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
      <Aside
        isHighlightsShown={isHighlightsShown}
        ref={highlightsRef}
      >
        <CrossIcon onClick={toggleSetIsHighlightsShown}>
          <Cross />
        </CrossIcon>
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
