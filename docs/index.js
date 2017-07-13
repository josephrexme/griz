import React from 'react';
import { render } from 'react-dom';
import styled, { injectGlobal } from 'styled-components';
import { Grid, GridCol } from '../griz.js';

injectGlobal`
  *{ box-sizing: border-box }
  html{ height: 100% }
  body{
    height: 100%;
    margin: 0;
    padding: 40px;
    background: #c1c1c1;
    font-family: 'Helvetica Neue', sans-serif;
    color: #555;
  }
  h2{ margin: 10px 0 }
`;

const Layout = styled.div`
  padding: 10px;
`;

const Heading = styled.div`
  text-align: center;
`;

const Section = styled.section`
  width: 800px;
  margin: 10px auto;
  padding: 10px;
  background: rgba(255, 255, 255, .8);
  color: #000;
  border-radius: 5px;
`;

const Fill = styled.div`
  background: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
`;

const Logo = styled.img`
  width: 150px;
`;

const annotate = (...prop) => {
  const [first, second] = prop;
  const columnAttr = `${first} column="${second}"`;
  return `<${ second && (first === 'Grid' ? `${first} ${second}` : columnAttr) || first}>`;
};

render((
  <Layout>
    <Heading>
      <Logo src="https://cdn.rawgit.com/josephrexme/griz/6929f017/griz-gray.png" />
      <h1>Griz Grids</h1>
    </Heading>
    <Section>
      <h2>{annotate('Grid')}</h2>
      <Grid>
        <GridCol><Fill>{annotate('GridCol')}</Fill></GridCol>
        <GridCol><Fill>{annotate('GridCol')}</Fill></GridCol>
      </Grid>
    </Section>
    <Section>
      <h2>{annotate('Grid', 'responsiveMd')}</h2>
      <Grid>
        <GridCol column="60"><Fill>{annotate('GridCol', 60)}</Fill></GridCol>
        <GridCol column="40"><Fill>{annotate('GridCol', 40)}</Fill></GridCol>
      </Grid>
    </Section>
  </Layout>
), document.getElementById('root'));
