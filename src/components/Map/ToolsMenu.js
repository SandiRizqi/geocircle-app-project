import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Input, message } from 'antd';

const { Search } = Input;
const props = {
  beforeUpload: (file) => {
    console.log(file.type);
    const isPNG = file.type === 'application/x-zip-compressed';

    if (!isPNG) {
      message.error(`${file.name} is not a zip file`);
    }

    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

export default function ToolsMenu() {
  const onSearch = (value) => console.log(value);
  return (
    <div className="control-bottons">
      <Search
        placeholder="Input location"
        allowClear
        onSearch={onSearch}
        style={{
          width: 150,
        }}
      />
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload zip</Button>
      </Upload>
    </div>
  );
}
