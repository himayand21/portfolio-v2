import { AMBIENCE } from '../../constants';
import Blog1 from '../../images/highlights/Blog1.jpg';
import Blog2 from '../../images/highlights/Blog2.png';
import Blog3 from '../../images/highlights/Blog3.jpeg';
import Org11 from '../../images/highlights/Org11.png';
import Org12 from '../../images/highlights/Org12.png';
import Org21 from '../../images/highlights/Org21.png';
import Org22 from '../../images/highlights/Org22.png';
import Org3 from '../../images/highlights/Org3.png';
import Vol1 from '../../images/highlights/Vol1.jpg';

const aiseFeed = [
  {
    type: 'Blogs',
    items: [{
      link: 'https://levelup.gitconnected.com/how-to-flex-a-beginners-guide-904c3edc2fdc',
      title: 'Your Ultimate Guide to Flexbox',
      subtitle: 'July 2021',
      getImage: (): string => Blog3,
    }, {
      link: 'https://himayandebnath.medium.com/10-modern-javascript-syntax-to-help-you-code-faster-82cc0a5a3960',
      title: '10 Modern JavaScript syntax to help you code faster',
      subtitle: 'November 2020',
      getImage: (): string => Blog2,
    }, {
      link: 'https://himayandebnath.medium.com/10-css-things-i-wish-i-knew-when-i-was-a-beginner-68ba4b5b3da8',
      title: '10 CSS things I wish I knew when I was a beginner',
      subtitle: 'August 2020',
      getImage: (): string => Blog1,
    }],
  },
  {
    type: 'Work Experience',
    items: [{
      link: 'https://www.vedantu.com',
      title: 'Vedantu Innovations',
      subtitle: 'October 2020 - now',
      getImage: (): string => Org3,
    }, {
      link: 'https://snapwiz.com',
      title: 'Snapwiz Edutec',
      subtitle: 'April 2020 - October 2020',
      getImage: (ambience?: string): string => {
        switch (ambience) {
          case AMBIENCE.BRIGHT: return Org21;
          case AMBIENCE.NIGHT: case AMBIENCE.DARK: return Org22;
          default: return Org21;
        }
      },
    }, {
      link: 'https://www.wipro.com',
      title: 'Wipro Technologies',
      subtitle: 'July 2018 - April 2020',
      getImage: (ambience?: string): string => {
        switch (ambience) {
          case AMBIENCE.BRIGHT: return Org11;
          case AMBIENCE.NIGHT: case AMBIENCE.DARK: return Org12;
          default: return Org11;
        }
      },
    }],
  },
  {
    type: 'Volunteer Experience',
    items: [{
      link: 'https://www.facebook.com/edforall.org',
      title: 'Edforall',
      subtitle: 'July 2016 - July 2017',
      getImage: (): string => Vol1,
    }],
  },
];

export type asiderowType = {
  link: string,
  title: string,
  subtitle: string,
  getImage: (ambience?: string) => string,
};

export type asideFeedType = {
  type: string,
  items: asiderowType[],
};

export default aiseFeed;
