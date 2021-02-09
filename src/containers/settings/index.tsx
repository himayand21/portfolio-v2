import { ReactElement } from 'react';
import {
  COLORS, COLOR_MAP, AMBIENCE, THEMES,
} from '../../constants';
import Check from '../../icons/Check';

import { Article } from '../../styles';
import {
  Label,
  Title,
  Subtitle,
  Box,
  Picker,
  PickerWrapper,
  Caption,
  Block,
  Pallete,
  CheckWrapper,
  ThemeBoxWrapper,
  ThemeBox,
  ThemeName,
} from './styles';

type SettingsProps = {
  color: string,
  ambience: string,
  setColor: (color: string) => void,
  setAmbience: (ambience: string) => void,
};

const getCaption = (name: string): string => (
  name.charAt(0) + name.slice(1).toLowerCase()
);

const Settings = ({
  color,
  ambience,
  setColor,
  setAmbience,
}: SettingsProps): ReactElement => (
  <Article>
    <Title>
      Settings
    </Title>
    <Subtitle>
      Customize your theme color and background
    </Subtitle>
    <Block>
      <Label>Color</Label>
      <Box>
        <Pallete>
          {Object.values(COLORS).map((each) => (
            <PickerWrapper>
              <Picker
                filledColor={COLOR_MAP[each]}
                onClick={() => setColor(each)}
              >
                {(color === each) && (
                  <CheckWrapper>
                    <Check />
                  </CheckWrapper>
                )}
              </Picker>
              <Caption>
                {getCaption(each)}
              </Caption>
            </PickerWrapper>
          ))}
        </Pallete>
      </Box>
    </Block>
    <Block>
      <Label>Background</Label>
      <Box>
        <Pallete>
          {Object.values(AMBIENCE).map((theme) => (
            <ThemeBoxWrapper>
              <ThemeBox
                onClick={() => setAmbience(theme)}
                selected={theme === ambience}
                customTheme={THEMES[theme]}
              >
                <ThemeName>
                  {getCaption(theme)}
                </ThemeName>
              </ThemeBox>
            </ThemeBoxWrapper>
          ))}
        </Pallete>
      </Box>
    </Block>
  </Article>
);

export default Settings;
