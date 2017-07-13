import styled, { css } from 'styled-components';

const paddingWidth = 10;
const responsiveSmBreak = 567;
const responsiveMdBreak = 767;
const responsiveLgBreak = 1023;

const columns = width => (
  {
    10: css`
      flex: 0 0 10%;
      max-width: 10%;
    `,
    20: css`
      flex: 0 0 20%;
      max-width: 20%;
    `,
    25: css`
      flex: 0 0 25%;
      max-width: 25%;
    `,
    33: css`
      flex: 0 0 33%;
      max-width: 33%;
    `,
    40: css`
      flex: 0 0 40%;
      max-width: 40%;
    `,
    50: css`
      flex: 0 0 50%;
      max-width: 50%;
    `,
    60: css`
      flex: 0 0 60%;
      max-width: 60%;
    `,
    66: css`
      flex: 0 0 66%;
      max-width: 66%;
    `,
    75: css`
      flex: 0 0 75%;
      max-width: 75%;
    `,
    80: css`
      flex: 0 0 80%;
      max-width: 80%;
    `,
    90: css`
      flex: 0 0 90%;
      max-width: 90%;
    `,
  }[width]
);

export const GridCol = styled.div`
  display: block;
  flex: 1;
  padding: ${paddingWidth / 2}px;
  width: 100%;
  ${props => columns(props.column)}
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  padding: ${paddingWidth / 2}px;
  & + &{
    margin-top: ${(paddingWidth / 2) * -1}px;
    padding-top: 0;
  }
  @media (max-width: ${responsiveSmBreak})
    ${props => props.responsiveSm && css`
      flex-direction: column;
      > ${GridCol}{
        margin-bottom: ${(paddingWidth * 3) / 2}px;
        margin-left: 0;
        max-width: 100%;
        width: 100%;
      }
    `}
  }
  @media (max-width: ${responsiveMdBreak})
    ${props => props.responsiveMd && css`
      flex-direction: column;
      > ${GridCol}{
        margin-bottom: ${(paddingWidth * 3) / 2}px;
        margin-left: 0;
        max-width: 100%;
        width: 100%;
      }
    `}
  }
  @media (max-width: ${responsiveLgBreak})
    ${props => props.responsiveLg && css`
      flex-direction: column;
      > ${GridCol}{
        margin-bottom: ${(paddingWidth * 3) / 2}px;
        margin-left: 0;
        max-width: 100%;
        width: 100%;
      }
    `}
  }
`;
