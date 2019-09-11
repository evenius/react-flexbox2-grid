import "flexboxgrid2"

// SpooOOoooky welcomes!
// This scaaary flexboxgridimplementation is an implementation of react-flexbox-grid:
// https://github.com/roylee0704/react-flexbox-grid

// With the new features of flexboxgrid2:
// https://evgenyrodionov.github.io/flexboxgrid2/

// It kinda looks like thiiIIIIiiis 👻
/*
  <Grid fluid>
    <Row between="lg">
      <Col xs={6} md={3} >
        <Hide atSize="xs" >
          <p>Not hereeee</p>
        </Hide>
      </Col>
    </Row>
  </Grid>
*/

export Grid from "./components/Grid"
export Row, { getRowProps } from "./components/Row"
export Col, { getColumnProps } from "./components/Col"
export Hide, { getHideProps } from "./components/Hide"
export ColRow from "./components/ColRow"
