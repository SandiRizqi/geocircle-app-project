import React from 'react'
import { Checkbox} from 'antd';
import { SATELLITE_IMAGERY } from './const';
import { useState } from 'react';


export default function ImageryListComponent() {
    const [checkedList, setCheckedList] = useState([]);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);


    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? SATELLITE_IMAGERY : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
      };

      const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < SATELLITE_IMAGERY.length);
        setCheckAll(list.length === SATELLITE_IMAGERY.length);
      };
    
  return (
    <div className="imagerylist">
        
      <Checkbox
      style={{
        float: 'left'
      }}
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Select all
      </Checkbox><br/>
      <Checkbox.Group
      style={{
        display:'flex',
        flexDirection: 'column'
      }}
        onChange={onChange}
        options={SATELLITE_IMAGERY}
        value={checkedList} 
      ></Checkbox.Group>
    </div>
  );
}
