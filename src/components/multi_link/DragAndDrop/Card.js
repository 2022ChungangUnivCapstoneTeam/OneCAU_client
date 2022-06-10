import { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

import React from 'react';

import { Collapse, Space, Input } from 'antd';
import { Button as Antd_button} from "antd";
import { HolderOutlined } from '@ant-design/icons';
import styled from 'styled-components';

// upload picture antd
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';


const { Panel } = Collapse;
const { TextArea } = Input;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const AntdCollapseWrapper = styled.div`
  @import '~antd/dist/antd.css';
  [data-theme='compact'] .site-collapse-custom-collapse .site-collapse-custom-panel,
  .site-collapse-custom-collapse .site-collapse-custom-panel {
    margin-bottom: 4px;
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

// upload picture antd
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });


export const Card = ({ card_header, card_type, id, index, moveCard, onCreate}) => {
  // card type에 따라서 보여지는 카드의 형태가 달라지도록 만들어야 함
  // onCreate는 윗 component에서 받아온 onCreate함수, 새로운 카드가 생성될 때 사용.
  const ref = useRef(null)


  // upload picture antd
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'sample_onelink.png',
      status: 'done',
      url: 'https://www.fnordware.com/superpng/pnggrad8rgb.png',
    },
    {
      uid: '-2',
      name: 'sample_onelink.png',
      status: 'done',
      url: 'https://pngimage.net/wp-content/uploads/2018/05/borboleta-marrom-png-1.png',
    },
    // {
    //   uid: '-xxx',
    //   percent: 50,
    //   name: 'sample_onelink.png',
    //   status: 'uploading',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-5',
    //   name: 'image.png',
    //   status: 'error',
    // },
  ]);

  ////////

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1

  drag(drop(ref))

  const onChange = (key) => {
    console.log(key);
  };

  // onCreate();

  if(card_type == 'text') {
    return (
      <>
          <div ref={ref} data-handler-id={handlerId}>
            <AntdCollapseWrapper>
              <Collapse
                  defaultActiveKey={['0']}
                  onChange={onChange}
                  expandIconPosition={["right"]}
                  className="site-collapse-custom-collapse"
                  >
                  <Panel header={card_header} key={handlerId} className="site-collapse-custom-panel">
                  <text>타이틀 텍스트</text>
                  <Input
                      placeholder="주제 문구 입력"
                      allowClear
                      onChange={onChange} />
                  <br />
                  <br />
                  <text>본문 텍스트</text>
                  <TextArea
                      placeholder="설명 문구 입력"
                      allowClear
                      onChange={onChange} />

                  {/* <p>{text}</p> */}

                  </Panel>
              </Collapse>
              </AntdCollapseWrapper>
          </div>
          {/* <div ref={ref} style={{ ...card_style, opacity }} data-handler-id={handlerId}>
              {text}
          </div> */}
      </>
    )
  }

  if(card_type == 'link') {
    return (
      <>
          <div ref={ref} data-handler-id={handlerId}>
            <AntdCollapseWrapper>
              <Collapse
                  defaultActiveKey={['0']}
                  onChange={onChange}
                  expandIconPosition={["right"]}
                  className="site-collapse-custom-collapse"
                  >
                  <Panel header={card_header} key={handlerId} className="site-collapse-custom-panel">

                  <text>타이틀 텍스트</text>
                  <Input
                      placeholder="버튼위에 보여질 텍스트"
                      allowClear
                      onChange={onChange} />
                  <br />
                  <br />
                  <text>연결될 링크 주소</text>
                  <TextArea
                      placeholder="https://"
                      allowClear
                      onChange={onChange} />
                  </Panel>
              </Collapse>
              </AntdCollapseWrapper>
          </div>
          {/* <div ref={ref} style={{ ...card_style, opacity }} data-handler-id={handlerId}>
              {text}
          </div> */}
      </>
    )
  }

  // upload picture


  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  if(card_type == 'picture') {
    return (
      <>
          <div ref={ref} data-handler-id={handlerId}>
            <AntdCollapseWrapper>
              <Collapse
                  defaultActiveKey={['0']}
                  onChange={onChange}
                  expandIconPosition={["right"]}
                  className="site-collapse-custom-collapse"
                  >
                  <Panel header={card_header} key={handlerId} className="site-collapse-custom-panel">

                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                  <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
                    <img
                      alt="example"
                      style={{
                        width: '100%',
                      }}
                      src={previewImage}
                    />
                  </Modal>
                  {/* <p>{text}</p> */}

                  </Panel>
              </Collapse>
              </AntdCollapseWrapper>
          </div>
          {/* <div ref={ref} style={{ ...card_style, opacity }} data-handler-id={handlerId}>
              {text}
          </div> */}
      </>
    )
  }
}
