import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
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
import { COLORS, AMBIENCE, THEMES } from './constants';

const App = () => {
  const [color, setColor] = useState(COLORS.BLUE);
  const [ambience, setAmbience] = useState(AMBIENCE.LIGHT);

  return (
    <ThemeProvider theme={THEMES[ambience][color]}>
      <Screen>
        <Left>
          <MenuItems>
            {header.map(({ icon: Icon, label }) => (
              <MenuItem>
                <MenuLogo>
                  <Icon />
                </MenuLogo>
                {label && (
                  <MenuName>
                    {label}
                  </MenuName>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Left>
        <Right />
      </Screen>
    </ThemeProvider>
  );
};
export default App;
