import React from 'react';
import { DatePicker, Space } from 'antd';

export default function DatePickerComponent() {

  const onChange = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <Space direction="herizontal" className='datePicker'>
      <div>
        <p>Start Date :</p>
        <DatePicker onChange={onChange} />
      </div>
      <div>
        <p>End Date :</p>
        <DatePicker onChange={onChange} />
      </div>
    </Space>
  );
}
