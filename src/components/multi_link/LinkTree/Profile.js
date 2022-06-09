import React from 'react';
import styled from 'styled-components';
import { Form } from 'react-bootstrap';
// import './App.css';
import { UserOutlined } from '@ant-design/icons';
import { Collapse, Input, Avatar } from 'antd';
import { margin } from 'polished';

const { Panel } = Collapse;
const { TextArea } = Input;

let Contain= styled.div`
  // width: 335px;
  // height: 244px;
  background: rgba(255,255,255,1);
  // padding: 30px 20px;
  // margin: 36px;
  opacity: 1;
  position: relative;
  top: 0px;
  left: 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;

const AntdCollapseWrapper = styled.div`
  @import '~antd/dist/antd.css';
  [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
  .site-collapse-custom-collapse .site-collapse-custom-panel {
    margin-bottom: 10px;
    overflow: hidden;
    background: #f7f7f7;
    border: 1px solid gray;
    border-radius: 2px;
    background-color: #ccc;
  }
  [data-theme="dark"] .site-collapse-custom-collapse .site-collapse-custom-panel {
    background: rgba(255,255,255,0.04);
    border: 0px;
  }
`;

function Profile() {

  const onChange = (key) => {
    console.log(key);
  };

  return (

    <>
      <AntdCollapseWrapper>
        <Collapse
            defaultActiveKey={['0']}
            onChange={onChange}
            expandIconPosition={["right"]}
            className="site-collapse-custom-collapse"
            >
            <Panel header="프로필" className="site-collapse-custom-panel">
              <Contain>
                <br/>
                  <Avatar size={64} icon={<UserOutlined/>} top={"50%"} left={"50%"}/>
                  {/* Avatar OnClick 만들어서 넣기 */}

                <br />
                <br />
                <Form.Label>메인텍스트</Form.Label>
                <Input
                    placeholder="사용자 이름 또는 대표 문구"
                    allowClear
                    onChange={onChange} />
                <br />
                <br />
                <Form.Label>서브텍스트</Form.Label>
                <TextArea
                    placeholder="추가로 적고 싶은 설명"
                    allowClear
                    onChange={onChange} />
              </Contain>
            </Panel>
        </Collapse>
      </AntdCollapseWrapper>
    </>



  );
};

export default Profile;