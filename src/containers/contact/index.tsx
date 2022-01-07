import {
  ReactElement,
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  MouseEvent,
} from 'react';

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
  FAILED: 'Sending Failed',
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

  const handleFormSubmit = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (contactFormRef.current) {
      const formData = new FormData(contactFormRef.current);
      try {
        setButtonMessage(BUTTON_TEXTS.SENDING);
        await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams(formData.toString()).toString(),
        });
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
          data-netlify="true"
          ref={contactFormRef}
        >
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
              onClick={handleFormSubmit}
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
