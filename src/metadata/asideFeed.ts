import Blog1 from '../images/Blog1.png';
import Blog2 from '../images/Blog2.png';
import Org1 from '../images/Org1.png';
import Org2 from '../images/Org2.jpg';
import Org3 from '../images/Org3.png';

const aiseFeed = [
  {
    type: 'Blogs',
    items: [{
      link: 'https://himayandebnath.medium.com/10-modern-javascript-syntax-to-help-you-code-faster-82cc0a5a3960',
      title: '10 Modern JavaScript syntax to help you code faster',
      subtitle: 'November 2020',
      image: Blog1,
    }, {
      link: 'https://himayandebnath.medium.com/10-css-things-i-wish-i-knew-when-i-was-a-beginner-68ba4b5b3da8',
      title: '10 CSS things I wish I knew when I was a beginner',
      subtitle: 'August 2020',
      image: Blog2,
    }],
  },
  {
    type: 'Work Experience',
    items: [{
      link: 'https://www.vedantu.com',
      title: 'Vedantu Innovations',
      subtitle: 'October 2020 - present',
      image: Org3,
    }, {
      link: 'https://snapwiz.com',
      title: 'Snapwiz Edutec',
      subtitle: 'April 2020 - October 2020',
      image: Org2,
    }, {
      link: 'https://www.wipro.com',
      title: 'Wipro Technologies',
      subtitle: 'August 2018 - April 2020',
      image: Org1,
    }],
  },
];

export type asiderowType = {
  link: string,
  title: string,
  subtitle: string,
  image: string,
};

export type asideFeedType = {
  type: string,
  items: asiderowType[],
};

export default aiseFeed;
