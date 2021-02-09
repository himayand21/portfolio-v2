import {
  Suspense, useState, lazy, ReactElement,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useHistory, useLocation, Route, Switch,
} from 'react-router-dom';

import Loader from './components/Loader';
import {
  Screen,
  Left,
  Right,
  MenuItems,
  MenuItem,
  MenuLogo,
  MenuName,
} from './styles';
import header from './metadata/header';
import {
  COLORS, AMBIENCE, THEMES, COLOR_MAP,
} from './constants';

const Profile = lazy(() => import('./containers/Profile'));
const Settings = lazy(() => import('./containers/settings'));

const App = (): ReactElement => {
  const [color, setColor] = useState(COLORS.SKY);
  const [ambience, setAmbience] = useState(AMBIENCE.BRIGHT);

  const history = useHistory();
  const location = useLocation();

  const switchTab = (path: string): void => {
    history.push(path);
  };

  const checkIfActive = (path: string): boolean => {
    if (location.pathname === path) return true;
    if (location.pathname === '/' && path === '/profile') return true;
    return false;
  };

  return (
    <ThemeProvider
      theme={{
        ...THEMES[ambience],
        color: COLOR_MAP[color],
      }}
    >
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
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route path="/profile" component={Profile} />
              <Route path="/settings">
                <Settings
                  color={color}
                  ambience={ambience}
                  setColor={setColor}
                  setAmbience={setAmbience}
                />
              </Route>
              <Route path="*" component={Profile} />
            </Switch>
          </Suspense>
        </Right>
      </Screen>
    </ThemeProvider>
  );
};
export default App;
