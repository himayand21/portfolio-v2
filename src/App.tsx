import {
  useState,
  ReactElement,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Route, Switch,
} from 'react-router-dom';

import Profile from './containers/profile';
import Settings from './containers/settings';
import Navigator from './containers/navigator';
import {
  Screen,
  Left,
  Right,
  GlobalStyle,
} from './styles';
import {
  COLORS, AMBIENCE, AMBIENCES, COLOR_MAP, ROUTES,
} from './constants';

const App = (): ReactElement => {
  const [color, setColor] = useState(COLORS.GREEN);
  const [ambience, setAmbience] = useState(AMBIENCE.NIGHT);

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
          <Navigator />
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
