import {
  useState,
  ReactElement,
  lazy,
  Suspense,
} from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Route, Switch,
} from 'react-router-dom';

import Navigator from './containers/navigator';
import ScrollToTop from './ScrollToTop';

import {
  Screen,
  Left,
  Right,
  GlobalStyle,
} from './styles';
import {
  COLORS, AMBIENCE, AMBIENCES, COLOR_MAP, ROUTES,
} from './constants';

import './App.css';

const Settings = lazy(() => import('./containers/settings'));
const Profile = lazy(() => import('./containers/profile'));
const Projects = lazy(() => import('./containers/projects'));
const Contact = lazy(() => import('./containers/contact'));

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
      <ScrollToTop />
      <GlobalStyle />
      <Screen>
        <Left>
          <Navigator />
        </Left>
        <Right>
          <Suspense fallback={<div />}>
            <Switch>
              <Route path={ROUTES.PROFILE}>
                <Profile
                  ambience={ambience}
                />
              </Route>
              <Route path={ROUTES.PROJECTS}>
                <Projects />
              </Route>
              <Route path={ROUTES.CONTACT}>
                <Contact />
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
          </Suspense>
        </Right>
      </Screen>
    </ThemeProvider>
  );
};
export default App;
