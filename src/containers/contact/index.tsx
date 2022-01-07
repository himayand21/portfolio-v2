import { ReactElement } from 'react';
import {
  contactInfo, profilerowType, profileInfo, resumeInfo,
} from '../../metadata/profile/profileInfo';

import { Article } from '../../styles';
import {
  Info, InfoLink, InfoLogo, ProfileRow,
} from '../profile/styles/profileInfoStyles';
import {
  Title,
  Card,
  DisplayImage,
  DisplayWrapper,
  DisplayName,
  DescriptionWrapper,
  DescriptionTitle,
  DescriptionValue,
  DescriptionLink,
  DescriptionName,
  ContactRow,
  ContactInfoLogo,
  ContactInfoSpan,
  ResumeLink,
  ResumeLabel,
  Footer,
} from './styles';

const Contact = (): ReactElement => (
  <Article>
    <Title>
      Contact
    </Title>
    <Card>
      <DisplayWrapper>
        <DisplayImage
          src="assets/display.jpg"
          alt=""
        />
        <DisplayName>
          Himayan Debnath
        </DisplayName>
      </DisplayWrapper>
      <DescriptionWrapper>
        <DescriptionName>Himayan Debnath</DescriptionName>
        <>
          {profileInfo.map(({
            getIcon,
            label,
          }: profilerowType): ReactElement => (
            <ContactRow key={label}>
              <ContactInfoLogo>
                {getIcon()}
              </ContactInfoLogo>
              <ContactInfoSpan>{label}</ContactInfoSpan>
            </ContactRow>
          ))}
        </>
        <DescriptionTitle>EMAIL</DescriptionTitle>
        <DescriptionValue>
          <DescriptionLink
            href="mailto:himayand21@gmail.com"
          >
            himayand21@gmail.com
          </DescriptionLink>
        </DescriptionValue>
        <DescriptionTitle>ON THE WEB</DescriptionTitle>
        <DescriptionValue>
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
        </DescriptionValue>
        <Footer>
          <ResumeLink
            href={resumeInfo.link}
            target="blank"
          >
            <ResumeLabel>
              {resumeInfo.label}
            </ResumeLabel>
          </ResumeLink>
        </Footer>
      </DescriptionWrapper>
    </Card>
  </Article>
);

export default Contact;
