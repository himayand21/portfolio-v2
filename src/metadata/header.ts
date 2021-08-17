import Profile from '../icons/Profile';
import Projects from '../icons/Projects';
import Messages from '../icons/Messages';
import Settings from '../icons/Settings';
import Skills from '../icons/Skills';
import { ROUTES } from '../constants';

const header = [
  {
    icon: Profile,
    label: 'Profile',
    path: ROUTES.PROFILE,
  },
  {
    icon: Projects,
    label: 'Projects',
    path: ROUTES.PROJECTS,
  }, {
    icon: Skills,
    label: 'Skills',
    path: ROUTES.SKILLS,
  }, {
    icon: Messages,
    label: 'Contact',
    path: ROUTES.CONTACT,
  }, {
    icon: Settings,
    label: 'Settings',
    path: ROUTES.SETTINGS,
  },
];

export default header;
