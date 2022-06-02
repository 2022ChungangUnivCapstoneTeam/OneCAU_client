import React, { useState } from 'react';
import { Container } from './styles';
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
import modalOnClick from './Blocks/ModalOnClick';

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
  const
    [image, setImage] = useState('');

  // Modal component
  const Modal__ = () => {
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

  // const contents =() => {
  //   <div
  //   style={{
  //       background: "red",
  //       position: "relative"
  //       }}
  //   >
  //     <span> Hello!! </span>
  //     <h1> Hello world! </h1>
  //   </div>
  // }

  // React Hook
  const App__ = () => {
    const [date, setDate] = useState(null);
    const  handleChange = value => {
      message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
      setDate(value);
    };
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
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
    <SplitPane
      split="vertical"
      minSize={50}
      // defaultSize={100}
      defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
      onChange={(size) => localStorage.setItem('splitPos', size)}
    >
    <Pane>
      <Container>
        <App__/>
        {/* <div className='App'>
          <div style={{ width: 400, margin: '100px auto' }}>
          <h1>antd version: {version}</h1>
          <DatePicker />
          <Antd_button type="primary" style={{ marginLeft: 8 }}>
            Primary Button
          </Antd_button>
          </div>
        </div> */}
      </Container>
    </Pane>
    <Pane>
      <Container>
        <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Multi_Link_page_build' subtitle='CAU multilink page builder' />
        <Button link='https://www.facebook.com/danielgomesp' name='Facebook' backgroundColor={variables.facebookColor} />
        {/* <Button link='https://www.instagram.com/danielgomesp/' name='Instagram' backgroundColor={variables.instagramColor} />
        <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' name='Youtube' backgroundColor={variables.youtubeColor} />
        <Button link='https://github.com/Danielgomesp' name='Github' backgroundColor={variables.githubColor} />
        <Button link='https://wa.me/5533999640132' name='Whatsapp' backgroundColor={variables.whatsappColor} />
        <Button link='https://github.com/Danielgomesp' name='Site Oficial' backgroundColor={variables.opt2Color} />
        <Button link='https://www.linkedin.com/in/danielgomesp/'  name='LinkedIn' backgroundColor={variables.linkedinColor} />
        <Button link='https://twitter.com/danielgoper' name='Twitter' backgroundColor={variables.twitterColor} /> */}
        <DndProvider backend={HTML5Backend}>
					<Draggable_cards />
				</DndProvider>
        {/* Block Modal */}
        <Modal__/>
      </Container>
    </Pane>
   </SplitPane>
   </div>
  )
}


// return (
//   <div class="container">
//     <div class="row">
//       <div class="col-md-6">
//       <Container>
//         <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
//         <Button link='https://www.facebook.com/danielgomesp' name='Facebook' backgroundColor={variables.facebookColor} />
//         <Button link='https://www.instagram.com/danielgomesp/' name='Instagram' backgroundColor={variables.instagramColor} />
//         <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' name='Youtube' backgroundColor={variables.youtubeColor} />
//         <Button link='https://github.com/Danielgomesp' name='Github' backgroundColor={variables.githubColor} />
//         <Button link='https://wa.me/5533999640132' name='Whatsapp' backgroundColor={variables.whatsappColor} />
//         <Button link='https://github.com/Danielgomesp' name='Site Oficial' backgroundColor={variables.opt2Color} />
//         <Button link='https://www.linkedin.com/in/danielgomesp/'  name='LinkedIn' backgroundColor={variables.linkedinColor} />
//         <Button link='https://twitter.com/danielgoper' name='Twitter' backgroundColor={variables.twitterColor} />
//       </Container>
//       </div>

//     <div class="col-md-6">
//       <Container>
//         <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
//         <Button link='https://www.facebook.com/danielgomesp' name='Facebook' backgroundColor={variables.facebookColor} />
//         <Button link='https://www.instagram.com/danielgomesp/' name='Instagram' backgroundColor={variables.instagramColor} />
//         <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' name='Youtube' backgroundColor={variables.youtubeColor} />
//         <Button link='https://github.com/Danielgomesp' name='Github' backgroundColor={variables.githubColor} />
//         <Button link='https://wa.me/5533999640132' name='Whatsapp' backgroundColor={variables.whatsappColor} />
//         <Button link='https://github.com/Danielgomesp' name='Site Oficial' backgroundColor={variables.opt2Color} />
//         <Button link='https://www.linkedin.com/in/danielgomesp/'  name='LinkedIn' backgroundColor={variables.linkedinColor} />
//         <Button link='https://twitter.com/danielgoper' name='Twitter' backgroundColor={variables.twitterColor} />
//       </Container>
//       </div>
//     </div>
//   {/* <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
//   <Button link='https://www.facebook.com/danielgomesp' icon={facebookLogo} name='Facebook' backgroundColor={variables.facebookColor} />
//   <Button link='https://www.instagram.com/danielgomesp/' icon={instagramLogo} name='Instagram' backgroundColor={variables.instagramColor} />
//   <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' icon={youtubeLogo} name='Youtube' backgroundColor={variables.youtubeColor} />
//   <Button link='https://github.com/Danielgomesp' icon={githubLogo} name='Github' backgroundColor={variables.githubColor} />
//   <Button link='https://wa.me/5533999640132' icon={whatsappLogo} name='Whatsapp' backgroundColor={variables.whatsappColor} />
//   <Button link='https://github.com/Danielgomesp' icon={reactLogo} name='Site Oficial' backgroundColor={variables.opt2Color} />
//   <Button link='https://www.linkedin.com/in/danielgomesp/' icon={linkedinLogo} name='LinkedIn' backgroundColor={variables.linkedinColor} />
//   <Button link='https://twitter.com/danielgoper' icon={twitterLogo} name='Twitter' backgroundColor={variables.twitterColor} /> */}

//   {/* <Header picture='https://scontent.fgvr2-1.fna.fbcdn.net/v/t31.0-8/p960x960/13710496_10209793534625506_2997078028056513758_o.jpg?_nc_cat=107&_nc_sid=7aed08&_nc_ohc=CT0MJiwW7cYAX-DuiSm&_nc_ht=scontent.fgvr2-1.fna&_nc_tp=6&oh=f10204fc396130e703c690b8be97f3c2&oe=5E94D2C2' title='Daniel Gomes Pereira' subtitle='A Brazilian Frontend Developer' />
//   <Button link='https://www.facebook.com/danielgomesp' name='Facebook' backgroundColor={variables.facebookColor} />
//   <Button link='https://www.instagram.com/danielgomesp/' name='Instagram' backgroundColor={variables.instagramColor} />
//   <Button link='https://www.youtube.com/channel/UCrVYzSKkbkJuCtXFIPAc1LA?view_as=subscriber' name='Youtube' backgroundColor={variables.youtubeColor} />
//   <Button link='https://github.com/Danielgomesp' name='Github' backgroundColor={variables.githubColor} />
//   <Button link='https://wa.me/5533999640132' name='Whatsapp' backgroundColor={variables.whatsappColor} />
//   <Button link='https://github.com/Danielgomesp' name='Site Oficial' backgroundColor={variables.opt2Color} />
//   <Button link='https://www.linkedin.com/in/danielgomesp/'  name='LinkedIn' backgroundColor={variables.linkedinColor} />
//   <Button link='https://twitter.com/danielgoper' name='Twitter' backgroundColor={variables.twitterColor} /> */}
// </div>
// )