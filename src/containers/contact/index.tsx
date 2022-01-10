import {
  ReactElement,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
} from 'react';

import {
  contactInfo, profilerowType, profileInfo, RESUME_LINK,
} from '../../metadata/profile/profileInfo';
import Anchor from '../../icons/Anchor';
import Display from '../../images/profile/display.jpg';

import { Article } from '../../styles';
import {
  Info, InfoLink, InfoLogo, ProfileRow,
} from '../profile/styles/profileInfoStyles';
import {
  Title,
  Card,
  DisplayImage,
  DisplayImageWrapper,
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
  ResumeLinkWrapper,
  ResumeLink,
  ResumeLabel,
  Footer,
  GetInTouchBtn,
  GetInTouchSpan,
  Aside,
  GetInTouchHeader,
  GetInTouchHeaderRow,
  GetInTouchForm,
  GetInTouchRow,
  GetInTouchInput,
  GetInTouchTextarea,
  SendMessageBtn,
  SendMessageSpan,
} from './styles';

const BUTTON_TEXTS = {
  SEND: 'Send Message',
  SENDING: 'Sending ...',
  FAILED: 'Message not Sent',
  SENT: 'Message Sent',
};

const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

const Contact = (): ReactElement => {
  const asideRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLFormElement>(null);

  const [isContactFormShown, setIsContactFormShown] = useState(false);
  const [buttonMessage, setButtonMessage] = useState(BUTTON_TEXTS.SEND);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => setName(event.target.value);
  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const onMessageChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => setMessage(event.target.value);

  const toggleIsContactFormShown = () => setIsContactFormShown(!isContactFormShown);

  const handleOutsideClick = (event: Event) => {
    const clickedOn = asideRef.current;
    if (clickedOn) {
      if (!clickedOn?.contains(event.target as Node)) {
        event.preventDefault();
        setIsContactFormShown(false);
      }
    }
  };

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (contactFormRef.current) {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: Object.entries({
          'form-name': 'portfolio-contact',
          name,
          email,
          message,
        }).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&'),
      };
      try {
        setButtonMessage(BUTTON_TEXTS.SENDING);
        const response = await fetch('/', options);
        if (!response?.ok) {
          throw response;
        }
        await delay(1000);
        setButtonMessage(BUTTON_TEXTS.SENT);
      } catch (error) {
        setButtonMessage(BUTTON_TEXTS.FAILED);
      } finally {
        await delay(1000);
        setButtonMessage(BUTTON_TEXTS.SEND);
        setName('');
        setEmail('');
        setMessage('');
        setIsContactFormShown(false);
      }
    }
  };

  useEffect(() => {
    if (isContactFormShown) {
      document.addEventListener('click', handleOutsideClick, false);
      return (() => {
        document.removeEventListener('click', handleOutsideClick, false);
      });
    }
    return (() => undefined);
  }, [isContactFormShown]);

  const isDisabled = !(name && email && message);
  const isEditable = buttonMessage === BUTTON_TEXTS.SEND;

  return (
    <>
      <Article>
        <Title>
          Contact
        </Title>
        <Card>
          <DisplayWrapper>
            <DisplayImageWrapper>
              <DisplayImage
                src={Display}
                alt=""
              />
            </DisplayImageWrapper>
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
            </DescriptionValue>
            <Footer>
              <ResumeLinkWrapper>
                <InfoLogo>
                  <Anchor />
                </InfoLogo>
                <ResumeLink
                  href={RESUME_LINK}
                  target="blank"
                >
                  <ResumeLabel>
                    Resume
                  </ResumeLabel>
                </ResumeLink>
              </ResumeLinkWrapper>
              <GetInTouchBtn onClick={toggleIsContactFormShown}>
                <GetInTouchSpan>
                  Get in Touch
                </GetInTouchSpan>
              </GetInTouchBtn>
            </Footer>
          </DescriptionWrapper>
        </Card>
      </Article>
      <Aside
        isContactFormShown={isContactFormShown}
        ref={asideRef}
      >
        <GetInTouchHeaderRow>
          <GetInTouchHeader>Get in Touch</GetInTouchHeader>
        </GetInTouchHeaderRow>
        <GetInTouchForm
          name="portfolio-contact"
          method="POST"
          ref={contactFormRef}
          onSubmit={handleFormSubmit}
        >
          <input type="hidden" name="form-name" value="portfolio-contact" />
          <GetInTouchRow>
            <GetInTouchInput
              type="text"
              name="name"
              spellCheck={false}
              placeholder="Name"
              value={name}
              onChange={onNameChange}
              disabled={!isEditable}
            />
          </GetInTouchRow>
          <GetInTouchRow>
            <GetInTouchInput
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              spellCheck={false}
              onChange={onEmailChange}
              disabled={!isEditable}
            />
          </GetInTouchRow>
          <GetInTouchRow>
            <GetInTouchTextarea
              name="message"
              placeholder="Your message"
              rows={3}
              value={message}
              spellCheck={false}
              onChange={onMessageChange}
              disabled={!isEditable}
            />
          </GetInTouchRow>
          <GetInTouchRow>
            <SendMessageBtn
              type="submit"
              disabled={isDisabled || !isEditable}
            >
              <SendMessageSpan>
                {buttonMessage}
              </SendMessageSpan>
            </SendMessageBtn>
          </GetInTouchRow>
        </GetInTouchForm>
      </Aside>
    </>
  );
};

export default Contact;
