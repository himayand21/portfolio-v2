export const COLORS = {
  SKY: 'SKY',
  GREEN: 'GREEN',
  RED: 'RED',
  ORANGE: 'ORANGE',
  PURPLE: 'PURPLE',
  YELLOW: 'YELLOW',
  BLUE: 'BLUE',
  PINK: 'PINK',
};

export const AMBIENCE = {
  LIGHT: 'LIGHT',
};

const COMMON_THEME = {
  containedText: 'rgb(235, 235, 235)',
};

const LIGHT_THEME = {
  ...COMMON_THEME,
  text: 'rgb(15, 20, 25)',
  text2: 'rgb(91, 112, 131)',
  background: 'rgb(255, 255, 255)',
  backgroundHover: 'rgba(0, 0, 0, 0.03)',
  border: 'rgb(235, 238, 240)',
};

export const COLOR_MAP = {
  [COLORS.SKY]: 'rgb(29, 161, 242)',
  [COLORS.GREEN]: 'rgb(23, 191, 99)',
  [COLORS.RED]: 'rgb(228, 0, 0)',
  [COLORS.ORANGE]: 'rgb(244, 93, 34)',
  [COLORS.PURPLE]: 'rgb(121, 75, 196)',
  [COLORS.YELLOW]: 'rgb(255, 173, 31)',
  [COLORS.BLUE]: 'rgb(66, 103, 178)',
  [COLORS.PINK]: 'rgb(224, 36, 94)',
};

export const THEMES = {
  [AMBIENCE.LIGHT]: LIGHT_THEME,
};

export type ThemeType = {
  text: string,
  text2: string,
  color: string,
  background: string,
  backgroundHover: string,
  border: string,
  containedText: string,
};
