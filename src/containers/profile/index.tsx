import {
  ReactElement,
  useEffect,
  useState,
  useRef,
} from 'react';

import Display from '../../images/profile/display.jpg';
import Cover from '../../images/profile/cover.jpg';

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
  SkillContainer,
} from './styles/asideStyles';

import { Pill, PillContent } from '../../styles';

import {
  profileInfo, contactInfo, bioInfo, profilerowType,
} from '../../metadata/profile/profileInfo';
import asideFeed, { asideFeedType, asiderowType } from '../../metadata/profile/asideFeed';
import timeline, { timelineType } from '../../metadata/profile/timeline';

import Bars from '../../icons/Bars';
import Cross from '../../icons/Cross';
import TimelineItem from './TimelineItem';
import { SkillItem } from '../projects/ProjectItem';

import skills, { SKILL_KEYS } from '../../metadata/skills';
import PreloadImage from '../../common/PreloadImage';

type ProfileProps = {
  ambience: string,
};

const Profile = ({
  ambience,
}: ProfileProps): ReactElement => {
  const [isHighlightsShown, setIsHighlightsShown] = useState(false);
  const toggleSetIsHighlightsShown = () => setIsHighlightsShown(!isHighlightsShown);

  const highlightsRef = useRef<HTMLDivElement>(null);
  const displayImageRef = useRef<HTMLImageElement>(null);
  const coverImageRef = useRef<HTMLImageElement>(null);

  const handleOutsideClick = (event: Event) => {
    const clickedOn = highlightsRef.current;
    if (clickedOn) {
      if (!clickedOn?.contains(event.target as Node)) {
        event.preventDefault();
        setIsHighlightsShown(false);
      }
    }
  };

  const handleAsideTop = () => {
    const highlightsElem = highlightsRef.current;
    if (highlightsElem) {
      highlightsElem.style.top = `${window.innerHeight - (highlightsElem.offsetHeight + 20)}px`;
    }
  };

  useEffect(() => {
    if (isHighlightsShown) {
      document.addEventListener('click', handleOutsideClick, false);
      return (() => {
        document.removeEventListener('click', handleOutsideClick, false);
      });
    }
    return (() => undefined);
  }, [isHighlightsShown]);

  useEffect(() => {
    handleAsideTop();
    window.addEventListener('resize', handleAsideTop);
    return (() => {
      window.removeEventListener('resize', handleAsideTop);
    });
  }, []);

  return (
    <FeedWrapper
      isHighlightsShown={isHighlightsShown}
    >
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
          <PreloadImage
            imageRef={coverImageRef}
          >
            <CoverImage
              src={Cover}
              alt=""
              ref={coverImageRef}
            />
          </PreloadImage>
          <PreloadImage
            imageRef={displayImageRef}
          >
            <DisplayImage
              src={Display}
              alt=""
              ref={displayImageRef}
            />
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
                <BioText
                  as="div"
                  key="bio-text"
                >
                  {text}
                </BioText>
              ))}
            </ProfileRow>
            <ProfileRow>
              {contactInfo.map(({
                getIcon,
                label,
                link,
              }: profilerowType): ReactElement => (
                <Info key={link}>
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
            getDescription = () => '',
            getTitle = () => '',
            getSubTitle = () => '',
            getImage = () => '',
            getIcon = () => '',
            link,
          } = row;
          return (
            <TimelineItem
              name={name}
              date={date}
              type={type}
              getDescription={getDescription}
              getTitle={getTitle}
              getSubTitle={getSubTitle}
              getImage={getImage}
              getIcon={getIcon}
              link={link}
              ambience={ambience}
              key={date}
            />
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
        <AsideBlock key="Skills">
          <AsideBlockTitle>
            Skills
          </AsideBlockTitle>
          <SkillContainer>
            {Object.values(SKILL_KEYS).map((skillKey: string): ReactElement => (
              <SkillItem
                key={skillKey}
                isChecked
                icon={skills[skillKey].icon}
                name={skills[skillKey].name}
              />
            ))}
          </SkillContainer>
        </AsideBlock>
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
              noBorder,
            }: asiderowType): ReactElement => (
              <AsideBlockItem
                href={link}
                target="blank"
                key={link}
              >
                <AsideItemImage
                  src={getImage(ambience)}
                  alt=""
                  noBorder={noBorder}
                />
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
