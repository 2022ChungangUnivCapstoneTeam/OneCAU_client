import React, { useState } from 'react';

// import antd library.
import { Route } from 'react-router-dom';
import { DatePicker, version, Alert, message, Modal, Tooltip} from "antd";
import { Button as Antd_button} from "antd";
import { SearchOutlined, LinkOutlined, FontSizeOutlined, PictureOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import modalOnClick from '../Blocks/ModalOnClick';

const AntdModalWrapper = styled.div`
  // @import '~antd/dist/antd.css';
  .ant-btn-dashed {
    // margin-bottom: 24px;
    // background-color: #f7f7f7;
    // background-color: red;
    // border: 0px;
    // border-radius: 2px;
  }
`;

// Modal component
function ModalView() {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setVisible(false);
        }, 3000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
        <AntdModalWrapper>
        <Antd_button type="dashed" onClick={showModal}>
            +블럭 추가
        </Antd_button>
        </AntdModalWrapper>
        <Modal
            visible={visible}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
            <Antd_button key="back" onClick={handleCancel}>
                Return
            </Antd_button>,
            // <Antd_button key="submit" type="primary" loading={loading} onClick={handleOk}>
            //   Submit
            // </Antd_button>,
            // <Antd_button
            //   key="link"
            //   href="https://google.com"
            //   type="primary"
            //   loading={loading}
            //   onClick={handleOk}
            // >
            //   기능 요청하기
            // </Antd_button>,
            ]}
        >
            {/* <p>페이지 블럭</p> */}
            <>
            {/* <Tooltip title="search">
                <Antd_button shape="circle" icon={<SearchOutlined />} />
            </Tooltip> */}
            {/* icons can be found in here
                https://ant.design/components/icon/*/}
            <Antd_button icon={<LinkOutlined />} block onClick={modalOnClick}>링크</Antd_button>
            <Antd_button icon={<FontSizeOutlined />} block>텍스트</Antd_button>
            <Antd_button icon={<PictureOutlined />} block>사진</Antd_button>
            </>
        </Modal>
        </>
    );
};

export default ModalView;