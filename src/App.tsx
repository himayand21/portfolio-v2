import {
  useState,
  ReactElement,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useHistory, useLocation, Route, Switch,
} from 'react-router-dom';

import Profile from './containers/profile';
import Settings from './containers/settings';
import {
  Screen,
  Left,
  Right,
  MenuItems,
  MenuItem,
  MenuLogo,
  MenuName,
  GlobalStyle,
} from './styles';
import header from './metadata/header';
import {
  COLORS, AMBIENCE, AMBIENCES, COLOR_MAP, ROUTES,
} from './constants';

const App = (): ReactElement => {
  const [color, setColor] = useState(COLORS.PINK);
  const [ambience, setAmbience] = useState(AMBIENCE.NIGHT);

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
    <ThemeProvider
      theme={{
        ...AMBIENCES[ambience],
        color: COLOR_MAP[color],
      }}
    >
      <GlobalStyle />
      <Screen>
        <Left>
          <MenuItems>
            {header.map(({
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
        </Left>
        <Right>
          <Switch>
            <Route path={ROUTES.PROFILE}>
              <Profile
                ambience={ambience}
              />
            </Route>
            <Route path={ROUTES.SETTINGS}>
              <Settings
                color={color}
                ambience={ambience}
                setColor={setColor}
                setAmbience={setAmbience}
              />
            </Route>
            <Route path="*">
              <Profile
                ambience={ambience}
              />
            </Route>
          </Switch>
        </Right>
      </Screen>
    </ThemeProvider>
  );
};
export default App;
