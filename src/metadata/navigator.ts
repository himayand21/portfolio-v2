import Profile from '../icons/Profile';
import Projects from '../icons/Projects';
import Messages from '../icons/Messages';
import Settings from '../icons/Settings';
import { ROUTES } from '../constants';

const navigator = [
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
    icon: Messages,
    label: 'Contact',
    path: ROUTES.CONTACT,
  }, {
    icon: Settings,
    label: 'Settings',
    path: ROUTES.SETTINGS,
  },
];

export default navigator;
