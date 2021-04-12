import React, { useState } from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function OrderOptionDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={styles.component}>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
}

// OrderOptionDate.propTypes = {

// }

export default OrderOptionDate;

