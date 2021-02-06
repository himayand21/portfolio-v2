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

const App = () => (
  <Screen>
    <Left>
      <MenuItems>
        {header.map(({ icon: Icon, label }) => (
          <MenuItem>
            <MenuLogo>
              <Icon />
            </MenuLogo>
            <MenuName>
              {label}
            </MenuName>
          </MenuItem>
        ))}
      </MenuItems>
    </Left>
    <Right>
      Right
    </Right>
  </Screen>
);
export default App;
