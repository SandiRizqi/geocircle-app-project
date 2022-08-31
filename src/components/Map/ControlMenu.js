import { Collapse, Space, Divider, Button, message} from 'antd';
import { SearchOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Empty } from 'antd';
import React from 'react';
import ImageryListComponent from '../ImageryListComponent';
import DatePickerComponent from '../DatePickerComponent';
import AdditionalFilterComponent from '../AdditionalFilterComponent';
import ListResults from './ListResults';



import { useState } from 'react';





const queryHeader = (
  <div>
    <FileSearchOutlined/> Search Query
  </div>
)

export default function ControlMenu() {
    const [results, setResults] = useState(null)
    const [active, setActive] = useState("")
    const [disable, setDisable] =  useState(false)
    const { Panel } = Collapse;


  const onClick = (e) => {
    setActive(e)
  };

  const searchAction = () => {
    message.loading('Loading requested data... .', 0);
    setDisable(true)
    console.log('search')
    setResults([1])
  }

    

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
          <Button icon={<SearchOutlined />} onClick={searchAction} disabled={disable}>Search</Button>
        </Panel>
        <Panel header="Results" key="2">
          {results ?
           <ListResults/> : <Empty/>
          }
        </Panel>
      </Collapse>
    </div>
  );
}
