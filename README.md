<h1 align="center">
  Griz
</h1>

<div align="center">

![Griz](https://cdn.rawgit.com/josephrexme/griz/66796439/griz.png)

</div>

A grid system for React applications based on flexbox and [styled-components](https://www.styled-components.com). See the [demo](https://josephrexme.github.io/griz/). Griz uses [styled-components](https://www.styled-components.com). But there's also a [Sass/CSS version](https://gist.github.com/josephrexme/e71e5502b09b5421084f32dcdce8247a).

> Future griz will use css grids with a flexbox fallback

### Installation

```sh
npm install griz
```

### Usage
```jsx
import {Grid, GridCol} from 'griz';

const App = () => (
  <Grid>
    <GridCol>I take up 50%</GridCol>
    <GridCol>Me too!</GridCol>
  </Grid>
);
```
`Grid` wraps a row of column and `GridCol` wraps the columns. The number of `GridCol` placed in a `Grid` will automatically take up the space required without any specification.

#### Responsiveness
```jsx
const App = () => (
  <Grid responsiveSm>
    <GridCol>I'm your half</GridCol>
    <GridCol>You're my half</GridCol>
  </Grid>
  <Grid responsiveMd>
    <GridCol>I am Rick</GridCol>
    <GridCol>I am Morty</GridCol>
  </Grid>
  <Grid responsiveLg>
    <GridCol>I am Batman</GridCol>
    <GridCol>I am uh... uh... uh.. Batman</GridCol>
  </Grid>
);
```

#### Columns
```jsx
const App = () => (
  <Grid>
    <GridCol column="60"></GridCol>
    <GridCol column="40"></GridCol>
  </Grid>
);
```
For more column values, see the [demo](https://josephrexme.github.io/griz/).

### Acknowledgements
Original idea by [Phillip Walton](http://philipwalton.github.io/solved-by-flexbox/demos/grids/)<br>
Much thanks [ionic framework](http://ionicframework.com/docs/components/#grid) for putting it together<br>
And this wouldn't be possible without [styled-components](https://www.styled-components.com)
