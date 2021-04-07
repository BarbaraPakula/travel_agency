import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';

const OrderForm = () => (
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>

);

// OrderForm.propTypes = {
//   props: PropTypes,
// };

export default OrderForm;

// const mapStateToProps = () => ({

// });

// const mapDispatchToProps = {

// };

// // export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

