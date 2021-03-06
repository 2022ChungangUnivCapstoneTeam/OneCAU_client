import React, { useState } from 'react';

// import antd library.
import { Route } from 'react-router-dom';
import { DatePicker, version, Alert, message, Modal, Tooltip} from "antd";
import { Button as Antd_button} from "antd";
import { SearchOutlined, LinkOutlined, FontSizeOutlined, PictureOutlined } from '@ant-design/icons';

import styled from 'styled-components';
import { propTypes } from 'react-bootstrap/esm/Image';


const AntdModalWrapper = styled.div`
  // @import '~antd/dist/antd.css';
  .ant-btn-dashed {
    // margin-bottom: 24px;
    background-color: #f7f7f7;
    // background-color: #B8DFF8;
    // border: 0px;
    // border-radius: 2px;
    width: 320px;
  }
`;

// Modal component
// function ModalView() {
const ModalView = (props) => {
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

    const sendBlockType = (text) => {
        props.getNewCardType(text);
    }

    const onClickHandler = (blockTypeName) => {
        // const blockType = +e.target.dataset.blockType;
        sendBlockType(blockTypeName);
        // console.log("onClickHandler function..");

        // console.log("blockType: ", blockType);
        // 클릭되면 블록(Card)이 생성되도록.
        // 하위 컴포넌트에서 상위 컴포넌트로 값을 넘겨주기 위해서는 props를 사용할 수 없음 (props는 상위->하위)
        // sendBlockType(blockTypeName);
        // onCreate();
    }

    return (
        <>
        <AntdModalWrapper>
        <Antd_button type="dashed" size="large" onClick={showModal}>
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
            {/* <Antd_button icon={<LinkOutlined />} block onClick={() => sendBlockType("link")}>링크</Antd_button> */}
            <Antd_button icon={<LinkOutlined />} block onClick={() => onClickHandler("link")}>링크</Antd_button>
            <Antd_button icon={<FontSizeOutlined />} block onClick={() => onClickHandler("text")}>텍스트</Antd_button>
            <Antd_button icon={<PictureOutlined />} block onClick={() => onClickHandler("picture")}>사진</Antd_button>
            {/* <h1>{blockType}</h1> */}
            </>
        </Modal>
        </>
    );
};

export default ModalView;