import React from 'react';
import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload, Input } from 'antd';

import ControlMenu from './ControlMenu';

const { Search } = Input;

const props = {
  beforeUpload: (file) => {
    console.log(file.type)
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

export default function MapCanvas({mode}) {

  const onSearch = (value) => console.log(value);

  return (
    <div id="map">
      <ControlMenu mode={mode} />
      <MapContainer center={[0, 120]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <div className="control-bottons">
        <Search
          placeholder="Input location"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload zip</Button>
        </Upload>
      </div>
    </div>
  );
}
