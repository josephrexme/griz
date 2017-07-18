import styled, { css } from 'styled-components';

const gutterWidth = 10;
const responsiveSmBreak = '567px';
const responsiveMdBreak = '767px';
const responsiveLgBreak = '1023px';

const columns = width => (
  css`
    flex: 0 0 ${width}%;
    max-width: ${width}%;
  `
);

const offsets = offset => (
  css`
    margin-left: ${offset}%;
  `
);

export const GridCol = styled.div`
  display: block;
  flex: 1;
  padding: ${gutterWidth / 2}px;
  width: 100%;
  ${props => columns(props.column)}
  ${props => offsets(props.offset)}
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: ${gutterWidth / 2}px;
  & + &{
    margin-top: ${(gutterWidth / 2) * -1}px;
    padding-top: 0;
  }
  @media (max-width: ${responsiveSmBreak}){
    ${props => props.responsiveSm && css`
      flex-direction: column;
      > ${GridCol}{
        margin-bottom: ${(gutterWidth * 3) / 2}px;
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
        margin-bottom: ${(gutterWidth * 3) / 2}px;
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
        margin-bottom: ${(gutterWidth * 3) / 2}px;
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
