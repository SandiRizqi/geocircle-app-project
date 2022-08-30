import { Collapse, Space, Divider, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
import ImageryListComponent from '../ImageryListComponent';
import DatePickerComponent from '../DatePickerComponent';
import AdditionalFilterComponent from '../AdditionalFilterComponent';
import { useState } from 'react';

const text = `
  A dog is a type of domesticated animal.
`;

export default function ControlMenu() {
    const [active, setActive] = useState("")
    const { Panel } = Collapse;


  const onClick = (e) => {
    setActive(e)
  };

    

  return (
    <div className="control-menu">
      <Collapse onChange={onClick} activeKey={active} >
        <Panel header="Data Query" key="1">
          <ImageryListComponent />
          <Space direction="vertical">
            <DatePickerComponent />
          </Space>
          <Divider />
          <AdditionalFilterComponent />
          <Button>Reset</Button>
          <Button icon={<SearchOutlined />}>Search</Button>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
}
