import { ReactElement } from 'react';
import {
  useHistory, useLocation,
} from 'react-router-dom';
import { ROUTES } from '../../constants';

import navigator from '../../metadata/navigator';
import {
  MenuItems,
  MenuItem,
  MenuLogo,
  MenuName,
} from './styles';

const Navigator = (): ReactElement => {
  const history = useHistory();
  const location = useLocation();

  const switchTab = (path: string): void => {
    history.push(path);
  };

  const checkIfActive = (path: string): boolean => {
    if (location.pathname === path) return true;
    if (location.pathname === ROUTES.DEFAULT && path === ROUTES.PROFILE) return true;
    return false;
  };

  return (
    <MenuItems>
      {navigator.map(({
        icon: Icon,
        label,
        path,
      }) => (
        <MenuItem
          onClick={() => switchTab(path)}
          isActive={checkIfActive(path)}
        >
          <MenuLogo isActive={checkIfActive(path)}>
            <Icon />
          </MenuLogo>
          {label && (
            <MenuName isActive={checkIfActive(path)}>
              {label}
            </MenuName>
          )}
        </MenuItem>
      ))}
    </MenuItems>
  );
};

export default Navigator;
