import styled from 'styled-components';
import {
  TABLET, LAPTOP, MOBILE, ThemeType, AmbienceType,
} from '../../constants';

import {
  TypographyBodyReduced,
  TypographyHeadline,
  TypographyIntroReduced,
  TypographyLabelReduced,
  TypographyBody,
} from '../../styles';

export const Title = styled(TypographyHeadline)`
    color: ${({ theme }) => theme.text1};
    margin-bottom: 10px;
`;

export const Subtitle = styled(TypographyIntroReduced)`
    color: ${({ theme }) => theme.text2};
`;

export const Label = styled(TypographyLabelReduced)`
    color: ${({ theme }) => theme.text2};
    margin: 15px 5px;
`;

export const Block = styled.section`
    display: flex;
    margin: 30px 0;
    width: 100%;
    flex-direction: column;
`;

export const Pallete = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
`;

type PickerProps = {
    filledColor: string,
    theme: ThemeType,
};

export const Picker = styled.span`
    width: 50px;
    height: 50px;
    background-color: ${({ filledColor }: PickerProps) => filledColor};
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid ${({ theme }) => theme.border};
    position: relative;
    @media only screen and (max-width: ${LAPTOP}px) {
        width: 45px;
        height: 45px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        width: 50px;
        height: 50px;
    }
`;

export const CheckWrapper = styled.span`
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20%;
`;

export const Box = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.backgroundHover};
    padding: 25px 15px 10px;
    border-radius: 15px;
`;

export const Caption = styled(TypographyBodyReduced)`
    margin-top: 5px;
    font-weight: bold;
`;

export const ThemeName = styled(TypographyBody)`
    font-weight: bold;
`;

export const PickerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 12.5%;
    margin-bottom: 15px;
    @media only screen and (max-width: ${TABLET}px) {
        width: 25%;
    }
`;

export const ThemeBoxWrapper = styled(PickerWrapper)`
    width: 31%;
    @media only screen and (max-width: ${TABLET}px) {
        width: 31%;
    }
`;

type ThemeBoxProps = {
    selected: boolean,
    customTheme: AmbienceType,
    theme: ThemeType,
};

export const ThemeBox = styled.div`
    width: 100%;
    min-height: 100px;
    border-radius: 7px;
    border: 2px solid ${({ theme, customTheme, selected }: ThemeBoxProps) => (selected ? theme.color : customTheme.border)};
    background-color: ${({ customTheme }: ThemeBoxProps) => customTheme.background};
    color: ${({ customTheme }: ThemeBoxProps) => customTheme.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    @media only screen and (max-width: ${LAPTOP}px) {
        min-height: 80px;
    }
    @media only screen and (max-width: ${TABLET}px) {
        min-height: 70px;
    }
    @media only screen and (max-width: ${MOBILE}px) {
        min-height: 60px;
    }
`;
