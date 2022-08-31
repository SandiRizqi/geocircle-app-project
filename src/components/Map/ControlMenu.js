import { Collapse, Space, Divider, Button} from 'antd';
import { SearchOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Empty } from 'antd';
import React from 'react';
import ImageryListComponent from '../ImageryListComponent';
import DatePickerComponent from '../DatePickerComponent';
import AdditionalFilterComponent from '../AdditionalFilterComponent';
import { useState } from 'react';

const queryHeader = (
  <div>
    <FileSearchOutlined/> Search Query
  </div>
)

export default function ControlMenu() {
    const [results, setResults] = useState(null)
    const [active, setActive] = useState("")
    const { Panel } = Collapse;


  const onClick = (e) => {
    setActive(e)
  };

    

  return (
    <div className="control-menu">
      <Collapse onChange={onClick} activeKey={active} >
        <Panel header={queryHeader} key="1">
          <ImageryListComponent />
          <Space direction="vertical">
          <DatePickerComponent />
          </Space>
          <Divider />
          <AdditionalFilterComponent />
          <Button icon={<SearchOutlined />}>Search</Button>
        </Panel>
        <Panel header="Results" key="2">
          {results ?
           'Ada data' : <Empty/>
          }
        </Panel>
      </Collapse>
    </div>
  );
}
