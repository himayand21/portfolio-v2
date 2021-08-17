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
  BRIGHT: 'BRIGHT',
  NIGHT: 'NIGHT',
  DARK: 'DARK',
};

const COMMON_AMBIENCE = {
  containedText: 'rgb(235, 235, 235)',
};

const BRIGHT_AMBIENCE = {
  ...COMMON_AMBIENCE,
  text: 'rgb(15, 20, 25)',
  text2: 'rgb(91, 112, 131)',
  background: 'rgb(245, 245, 245)',
  backgroundHover: 'rgba(0, 0, 0, 0.03)',
  border: 'rgba(0, 0, 0, 0.1)',
};

const NIGHT_AMBIENCE = {
  ...COMMON_AMBIENCE,
  text: 'rgb(245, 245, 245)',
  text2: 'rgb(136, 153, 166)',
  background: 'rgb(21, 32, 43)',
  backgroundHover: 'rgba(255, 255, 255, 0.03)',
  border: 'rgb(56, 68, 77)',
};

const DARK_AMBIENCE = {
  ...COMMON_AMBIENCE,
  text: 'rgb(217, 217, 217)',
  text2: 'rgb(110, 118, 125)',
  background: 'rgb(25, 25, 25)',
  backgroundHover: 'rgba(255, 255, 255, 0.03)',
  border: 'rgb(47, 51, 54)',
};

export const COLOR_MAP = {
  [COLORS.SKY]: 'rgb(29, 161, 242)',
  [COLORS.GREEN]: 'rgb(23, 191, 99)',
  [COLORS.RED]: 'rgb(255, 0, 0)',
  [COLORS.ORANGE]: 'rgb(244, 93, 34)',
  [COLORS.PURPLE]: 'rgb(161, 75, 196)',
  [COLORS.YELLOW]: 'rgb(255, 173, 31)',
  [COLORS.BLUE]: 'rgb(66, 103, 178)',
  [COLORS.PINK]: 'rgb(255, 16, 94)',
};

export const AMBIENCES = {
  [AMBIENCE.BRIGHT]: BRIGHT_AMBIENCE,
  [AMBIENCE.NIGHT]: NIGHT_AMBIENCE,
  [AMBIENCE.DARK]: DARK_AMBIENCE,
};

export type AmbienceType = {
  text: string,
  text2: string,
  background: string,
  backgroundHover: string,
  border: string,
  containedText: string,
};

export type ThemeType = AmbienceType & {
  color: string,
};
