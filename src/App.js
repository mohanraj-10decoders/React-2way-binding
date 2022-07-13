import 'antd/dist/antd.css';
import { TimePicker } from 'antd';
import { Input, InputNumber, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './App.css';
import { useState } from 'react';

function App() {
  const initData = {
    name: '',
    event: '',
    time: null,
    choice: '',
    number: '',
  };
  const [data, setData] = useState(initData);
  const [time, setTime] = useState(null);
  const handleData = ({ key, value }) => {
    let temp = { ...data };
    temp[key] = value;
    setData({ ...temp });
  };
  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
  ];
  return (
    <div
      style={{
        display: 'block',
        width: 500,
        padding: 30,
        backgroundColor: 'lightblue',
        borderRadius: '5px',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>2 Way binding with Ant Design</h2>
      <div className='input'>
        <label>Name</label>
        <Input
          value={data.name}
          onChange={(evt) =>
            handleData({ key: 'name', value: evt.target.value })
          }
          size='large'
          placeholder='User Name'
          prefix={<UserOutlined />}
        />
      </div>
      <div className='input'>
        <label>Event</label>
        <Input
          value={data.event}
          onChange={(evt) =>
            handleData({ key: 'event', value: evt.target.value })
          }
          placeholder='Event'
        />
      </div>
      <div className='input'>
        <label>Time</label>
        <TimePicker
          style={{ width: '100%' }}
          value={time}
          onChange={(evt) => setTime(evt)}
        />
      </div>
      <div className='input'>
        <label>Choice</label>
        <Select
          value={data.choice}
          onChange={(evt) => handleData({ key: 'choice', value: evt })}
          style={{ width: '100%' }}
          options={options}
        ></Select>
      </div>
      <div className='input'>
        <label>Number</label>
        <InputNumber
          value={data.number}
          onChange={(evt) => {
            handleData({ key: 'number', value: evt });
          }}
          style={{ width: '100%' }}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <button
          style={{ width: '100px', backgroundColor: 'black', color: 'white' }}
          onClick={() => {
            console.log(data);
            setData(initData);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
