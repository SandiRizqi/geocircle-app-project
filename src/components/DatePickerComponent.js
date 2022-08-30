import React from 'react';
import { DatePicker, Space } from 'antd';

export default function DatePickerComponent() {

  const onChange = (date, dateString) => {
    console.log(dateString);
  };

  return (
    <Space direction="herizontal" className='datePicker'>
      <div>
        <span>Start Date</span>
        <DatePicker onChange={onChange} />
      </div>
      <div>
        <span>End Date</span>
        <DatePicker onChange={onChange} />
      </div>
      
 
    </Space>
  );
}
