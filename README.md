<h1 align="center">
  Griz
</h1>

<div align="center">

![Griz](https://cdn.rawgit.com/josephrexme/griz/66796439/griz.png)

</div>

A grid system for React applications based on flexbox and [styled-components](https://www.styled-components.com). See the [demo](https://josephrexme.github.io/griz/). Griz uses [styled-components](https://www.styled-components.com). But there's also a [Sass/CSS version](https://gist.github.com/josephrexme/e71e5502b09b5421084f32dcdce8247a).

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
`<Grid>` defines a row and `<GridCol>` defines the columns. The number of `<GridCol>` placed in a `<Grid>` will automatically take up the space required without any specification. But you can also [specify columns](#columns).

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

#### Gutters
Custom widths can be set to override the default 10px gutter width
```jsx
const App = () => (
  <Grid gutterWidth="20">
    <GridCol>So close Jack</GridCol>
    <GridCol>So close Rose</GridCol>
  </Grid>
);
```
You could set custom width to 0 for a gutterless grid or you can simply use gutterless.
```jsx
const App = () => (
  <Grid gutterless>
    <GridCol>So close Jack</GridCol>
    <GridCol>So close Rose</GridCol>
  </Grid>
);
```

#### Columns
Think of the total as a 100 and throw in any value that you divide for any ratio you want. Could be 50:50 for a 2 equal sized grid, 60:40, and so on.
```jsx
const App = () => (
  <Grid>
    <GridCol column="60"></GridCol>
    <GridCol column="40"></GridCol>
  </Grid>
);
```

#### Offsets
```jsx
const App = () => (
  <Grid>
    <GridCol offset="25"></GridCol>
  </Grid>
);
```
For more column and offset values at work, see the [demo](https://josephrexme.github.io/griz/).

#### Wrapping columns
When column value is not defined you get the benefit of automatically fitting in the columns on one line of the row. If you need wrapping columns you'll have to specify a column value. A common case for this is when iterating items programmatically.

### License
Licensed under MIT License, Copyright © Joseph Rex

See [LICENSE](https://github.com/josephrexme/griz/blob/master/LICENSE) for more information.

### Acknowledgements
Original idea by [Phillip Walton](http://philipwalton.github.io/solved-by-flexbox/demos/grids/)<br>
Much thanks to [ionic framework](http://ionicframework.com/docs/components/#grid) for building on that<br>
And this wouldn't be possible without [styled-components](https://www.styled-components.com)
