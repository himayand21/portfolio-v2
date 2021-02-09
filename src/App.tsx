import {
  useState, ReactElement,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  useHistory, useLocation, Route, Switch,
} from 'react-router-dom';

import Profile from './containers/Profile';
import Settings from './containers/settings';
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
  COLORS, AMBIENCE, AMBIENCES, COLOR_MAP,
} from './constants';

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
        ...AMBIENCES[ambience],
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
        </Right>
      </Screen>
    </ThemeProvider>
  );
};
export default App;
