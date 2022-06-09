import { useRef, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

import React from 'react';

import { Collapse, Space, Input } from 'antd';
import { Button as Antd_button} from "antd";
import { HolderOutlined } from '@ant-design/icons';
import styled from 'styled-components';


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

// const collapse = () => {
//     const onChange = (key) => {
//       console.log(key);
//     };

//     return (
//       <Collapse defaultActiveKey={['1']} onChange={onChange}>
//         <Panel header="This is panel header 1" key="1">
//           <p>{text}</p>
//         </Panel>
//       </Collapse>
//     );
// }

// const card_style = {
//   border: '1px solid black',
//   padding: '0.5rem 1rem',
//   marginBottom: '.5rem',
//   backgroundColor: 'white',
//   cursor: 'move',
// }

export const Card = ({ card_header, card_type, id, index, moveCard }) => {
  // card type에 따라서 보여지는 카드의 형태가 달라지도록 만들어야 함
  const ref = useRef(null)

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

  // const [{ card_type }] = () => {
  //   card_type: monitor.getCardType(),
  // }


  const onChange = (key) => {
    console.log(key);
  };

  // const genExtra = () => {
  //   <HolderOutlined
  //     onClick={(event) => {
  //       event.stopPropagation();
  //     }}
  //   />
  // };
  // const [expandIconPosition, setExpandIconPosition] = useState('left');

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

                  <Input
                      placeholder="주제 문구 입력"
                      allowClear
                      onChange={onChange} />
                  <br />
                  <br />
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

                  <Input
                      placeholder="주제 문구 입력"
                      allowClear
                      onChange={onChange} />
                  <br />
                  <br />
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

                  <Input
                      placeholder="주제 문구 입력"
                      allowClear
                      onChange={onChange} />
                  <br />
                  <br />
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
}
