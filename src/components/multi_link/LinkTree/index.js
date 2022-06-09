import React, { useState } from 'react';
import { Container__ } from './styles';
import Button from '../Button';
import variables from '../variables';
import Header from '../Header';

import SplitPane, {Pane} from 'react-split-pane';
import Device from 'react-device-frame'
import 'react-device-frameset/dist/styles/marvel-devices.min.css'

// import antd library.
import { Route } from 'react-router-dom';
import { DatePicker, version, Alert, message, Modal, Tooltip} from "antd";
import { Button as Antd_button} from "antd";
import { SearchOutlined, LinkOutlined, FontSizeOutlined, PictureOutlined } from '@ant-design/icons';

import { useDrag } from 'react-dnd';
import { render } from 'react-dom';
import Draggable_cards from '../DragAndDrop/exportDnD';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';
// import modalOnClick from './Blocks/ModalOnClick';
import ModalView from './Modal/ModalView';
import Profile from './Profile';
import { Row, Col, Container } from 'react-bootstrap';

// const facebookLogo = require('../../images/facebook.svg');
// const githubLogo = require('../../images/github.svg');
// const youtubeLogo = require('../../images/youtube.svg');
// const instagramLogo = require('../../images/instagram.svg');
// const linkedinLogo = require('../../images/linkedin-in.svg');
// const reactLogo = require('../../images/react.svg');
// const twitterLogo = require('../../images/twitter.svg');
// const whatsappLogo = require('../../images/whatsapp.svg');
// '../../../img/482380.jpg'

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

// export default function LinkTree(props) {
export default function LinkTree() {
  // const [image, setImage] = useState('');
  const [container, setContainer] = useState(null);
  const [newCardType, setNewCardType] = useState("");

  const getNewCardType = (text) => {
    setNewCardType(text);
    // console.log(text);
  }

  // React Hook
  const App__ = () => {
    const [date, setDate] = useState(null);
    const  handleChange = value => {
      message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
      setDate(value);
    };
    return (
      <div style={{ width: 400, margin: '200px auto' }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          {/* Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'} */}
          <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        </div>
      </div>
    );
  }

  return (
    <div className="LinkTree">
      <Container fluid>
        <Row>
          <Col md={4} className="item">
            {/* <Container__> */}
              <App__/>
            {/* </Container__> */}
          </Col>

          <Col md={4} className="item">
            <Container__>
              <Header title='Multi_Link_page_build' subtitle='CAU multilink page builder' />
              <Profile/>
              <DndProvider backend={HTML5Backend}>
                {/* this is Container */}
                <Draggable_cards />
              </DndProvider>

              {/* Block Modal */}
              <ModalView getNewCardType={getNewCardType}/>
            </Container__>
          </Col>
        </Row>
      </Container>
    </div>
  )
}