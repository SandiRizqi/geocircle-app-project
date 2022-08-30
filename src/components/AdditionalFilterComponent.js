import React from 'react';
import { Slider } from 'antd';

const formatter = (value) => `${value}%`;
const formatm = (value) => `${value}m`;
const formatd = (value) => `${value}°`;

export default function AdditionalFilterComponent() {
  return (
    <div className='addition'>
      <div>
        <h4 className='addition-title'><strong>Cloud Cover:</strong></h4><br/>
        <Slider tipFormatter={formatter} defaultValue={100}/>
      </div>
      <div>
        <h4 className='addition-title'><strong>Resolution:</strong></h4><br/>
        <Slider range tipFormatter={formatm} defaultValue={[0,30]} min={0} max={30} step={0.5}/>
      </div>
      <div>
        <h4 className='addition-title'><strong>Off Nadir:</strong></h4><br/>
        <Slider tipFormatter={formatd} defaultValue={60} min={0} max={60} step={1}/>
      </div>
    </div>
  );
}
