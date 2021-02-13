import styled from 'styled-components';

import {
  DESKTOP, TABLET,
} from '../../constants';
import { TypographyIntroSuper } from '../../styles';

export const FeedWrapper = styled.section`
    display: flex;
    align-items: flex-start;
    width: 100%;
    padding-right: calc(50vw - 725px);
    @media only screen and (max-width: ${DESKTOP}px) {
        padding-right: 0px;
    }
`;

export const Feed = styled.div`
    max-width: 600px;
    min-width: 50%;
    min-height: 100vh;
    border-right: 1px solid ${({ theme }) => theme.border};
    @media only screen and (max-width: ${TABLET}px) {
        width: 100%;
        min-width: unset;
        max-width: unset;
        border-right-width: 0px;
    }
`;

export const Header = styled(TypographyIntroSuper)`
    color: ${({ theme }) => theme.text};
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.border};
`;
