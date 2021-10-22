import { AMBIENCE } from '../../constants';
import Blog1 from '../../images/Blog1.png';
import Blog2 from '../../images/Blog2.jpg';
import Org11 from '../../images/Org11.png';
import Org12 from '../../images/Org12.png';
import Org21 from '../../images/Org21.png';
import Org22 from '../../images/Org22.png';
import Org3 from '../../images/Org3.png';
import Vol1 from '../../images/Vol1.jpg';

const aiseFeed = [
  {
    type: 'Blogs',
    items: [{
      link: 'https://himayandebnath.medium.com/10-modern-javascript-syntax-to-help-you-code-faster-82cc0a5a3960',
      title: '10 Modern JavaScript syntax to help you code faster',
      subtitle: 'November 2020',
      getImage: (): string => Blog1,
    }, {
      link: 'https://himayandebnath.medium.com/10-css-things-i-wish-i-knew-when-i-was-a-beginner-68ba4b5b3da8',
      title: '10 CSS things I wish I knew when I was a beginner',
      subtitle: 'August 2020',
      getImage: (): string => Blog2,
    }],
  },
  {
    type: 'Work Experience',
    items: [{
      link: 'https://www.vedantu.com',
      title: 'Vedantu Innovations',
      subtitle: 'October 2020 - present',
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
