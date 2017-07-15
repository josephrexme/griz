import styled, { css } from 'styled-components';

const paddingWidth = 10;
const responsiveSmBreak = '567px';
const responsiveMdBreak = '767px';
const responsiveLgBreak = '1023px';

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
    34: css`
      flex: 0 0 34%;
      max-width: 34%;
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
    67: css`
      flex: 0 0 67%;
      max-width: 67%;
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

const offsets = offset => (
  {
    10: css`
      margin-left: 10%;
    `,
    20: css`
      margin-left: 20%;
    `,
    25: css`
      margin-left: 25%;
    `,
    33: css`
      margin-left: 33%;
    `,
    34: css`
      margin-left: 34%;
    `,
    40: css`
      margin-left: 40%;
    `,
    50: css`
      margin-left: 50%;
    `,
    60: css`
      margin-left: 60%;
    `,
    66: css`
      margin-left: 66%;
    `,
    67: css`
      margin-left: 70%;
    `,
    75: css`
      margin-left: 75%;
    `,
    80: css`
      margin-left: 80%;
    `,
    90: css`
      margin-left: 90%;
    `,
  }[offset]
);

export const GridCol = styled.div`
  display: block;
  flex: 1;
  padding: ${paddingWidth / 2}px;
  width: 100%;
  ${props => columns(props.column)}
  ${props => offsets(props.offset)}
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  padding: ${paddingWidth / 2}px;
  & + &{
    margin-top: ${(paddingWidth / 2) * -1}px;
    padding-top: 0;
  }
  @media (max-width: ${responsiveSmBreak}){
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
  @media (max-width: ${responsiveMdBreak}){
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
  @media (max-width: ${responsiveLgBreak}){
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
  ${props => props.gutterless && css`
    padding: 0;
    > ${GridCol}{
      padding: 0;
    }
  `}
`;
