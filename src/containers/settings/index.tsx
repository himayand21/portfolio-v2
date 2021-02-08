import { ReactElement } from 'react';
import { COLORS, COLOR_MAP } from '../../constants';
import Check from '../../icons/Check';

import { Article } from '../../styles';
import {
  Label, Title, Subtitle, Box, Picker, PickerWrapper, Caption, Block, Pallete, Tick,
} from './styles';

type SettingsProps = {
  color: string,
  ambience: string,
  setColor: (color: string) => void,
  setAmbience: (ambience: string) => void,
};

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
                  <Tick>
                    <Check />
                  </Tick>
                )}
              </Picker>
              <Caption>
                {each.charAt(0) + each.slice(1).toLowerCase()}
              </Caption>
            </PickerWrapper>
          ))}
        </Pallete>
      </Box>
    </Block>
    <Block>
      <Label>Background</Label>
      <Box>Content</Box>
    </Block>
  </Article>
);

export default Settings;
