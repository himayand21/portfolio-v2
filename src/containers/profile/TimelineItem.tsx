import { ReactElement, useRef } from 'react';

import PreloadImage from '../../common/PreloadImage';
import Display from '../../images/profile/display.jpg';
import { timelineType, types } from '../../metadata/profile/timeline';

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

type linkPropType = {
    getImage: (ambience: string) => string,
    getTitle: () => string | ReactElement,
    getSubTitle: () => string | ReactElement,
    link: string,
    ambience: string,
};

const LinkInTimeline = ({
  getTitle = () => '',
  getSubTitle = () => '',
  getImage = () => '',
  link = '',
  ambience = '',
}: linkPropType): ReactElement => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <TimelineLink target="blank" href={link}>
      <PreloadImage
        imageRef={imageRef}
      >
        <>
          <TimelineLinkImage
            src={getImage(ambience)}
            ref={imageRef}
            alt=""
          />
          <TimelineLinkDivider />
        </>
      </PreloadImage>
      <TimelineLinkInfoWrapper>
        <TimelineLinkTitle>{getTitle()}</TimelineLinkTitle>
        <TimelineLinkSubtitle>{getSubTitle()}</TimelineLinkSubtitle>
      </TimelineLinkInfoWrapper>
    </TimelineLink>
  );
};

type propType = timelineType & { ambience: string };

const Timeline = ({
  name,
  date,
  type,
  getDescription = () => '',
  getTitle = () => '',
  getSubTitle = () => '',
  getImage = () => '',
  getIcon = () => '',
  link,
  ambience,
}: propType): ReactElement => (
  <TimelineItem key={date}>
    <Sender>
      <SenderImage
        src={Display}
        alt=""
      />
      <SenderDetails>
        <SenderName>{name}</SenderName>
        <SenderDate>{date}</SenderDate>
      </SenderDetails>
    </Sender>
    {getDescription()}
    {(() => {
      switch (type) {
        case types.LINK: {
          return (
            <LinkInTimeline
              getTitle={getTitle}
              getSubTitle={getSubTitle}
              getImage={getImage}
              link={link || ''}
              ambience={ambience}
            />
          );
        }
        case types.EVENT: {
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

export default Timeline;
