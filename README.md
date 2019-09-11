# react-flexbox2-grid
[![npm version](https://badge.fury.io/js/react-flexbox2-grid.svg)](https://badge.fury.io/js/react-flexbox-grid)
[![NPM Status](http://img.shields.io/npm/dm/react-flexbox2-grid.svg?style=flat)](https://www.npmjs.org/package/react-flexbox-grid)

`react-flexbox2-grid` is a shameless ripoff of the excellent [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid), updated to use flexboxgrid2.

Setup
-----

### Installation

`react-flexbox2-grid` can be installed as an [npm package](https://www.npmjs.com/package/react-flexbox2-grid):

```bash
npm install --save react-flexbox2-grid
```

Usage
-----

Now you can import and use the components:

```jsx
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={6} md={3}>
            Hello, world!
          </Col>
        </Row>
      </Grid>
    );
  }
}
```


_Original_ Contributors
-----------
[![Roy Lee](https://avatars0.githubusercontent.com/u/3850661?v=3&s=144)](https://github.com/roylee0704/) | [![Helder Santana](https://avatars1.githubusercontent.com/u/134727?v=3&s=144)](https://github.com/heldr/) | [![Matija Marohnić](https://avatars2.githubusercontent.com/u/471278?v=3&s=144)](https://github.com/silvenon)
---|---|---
[Roy Lee](https://github.com/roylee0704) | [Helder Santana](https://github.com/heldr/) | [Matija Marohnić](https://github.com/silvenon)


TODO
-----

[] Actually add how this works to documentation
[] Add full test-suite

License
-------
ISC