import styled, { css } from 'styled-components';

const gutterWidth = 10;
const responsiveSmBreak = '567px';
const responsiveMdBreak = '767px';
const responsiveLgBreak = '1023px';

export const GridCol = styled.div`
  display: block;
  flex: 1;
  width: 100%;
  ${props => props.column && css`
    flex: 0 0 ${props.column}%;
    max-width: ${props.column}%;
  `}
  ${props => props.offset && css`
    margin-left: ${props.offset}%;
  `}
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  & + &{
    margin-top: ${props => ((props.gutterWidth || gutterWidth) / 2) * -1}px;
    padding-top: 0;
  }
  padding: ${props => (props.gutterWidth || gutterWidth) / 2}px;
  > ${GridCol}{
    padding: ${props => (props.gutterWidth || gutterWidth) / 2}px;
  }
  @media (max-width: ${responsiveSmBreak}){
    ${props => props.responsiveSm && css`
      flex-direction: column;
      > ${GridCol}{
        margin-bottom: ${((props.gutterWidth || gutterWidth) * 3) / 2}px;
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
        margin-bottom: ${((props.gutterWidth || gutterWidth) * 3) / 2}px;
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
        margin-bottom: ${((props.gutterWidth || gutterWidth) * 3) / 2}px;
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
