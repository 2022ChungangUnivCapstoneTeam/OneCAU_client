import React, { Component , useState} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { connect } from 'react-redux'

import NaviContainer from './components/navi/NaviContainer'
import Auth from './components/auth/Auth.js';
import storage from './lib/storage';
import * as UserActions from './redux/user'
import { bindActionCreators } from 'redux';
import { render } from '@testing-library/react';

import VimEditor from './components/editor/VimEditor.js';
import LinkTree from './components/multi_link/LinkTree';
import styled from 'styled-components';

const Container = styled.div`
  overflow: scroll;
  width: 2000px;
  height: 2000px;
  // position: relative;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { xml: null };
  }

  initializeUserInfo = async () => {
    const email = storage.get('email')

    if(!email) return;

    const { UserActions } = this.props
    UserActions.setEmail(email)
    try {
      await UserActions.checkStatus()
    } catch (e){
      storage.remove('email')
      window.location.href = '/auth/signup?expired'
    }
  }

  componentWillMount() {
    this.initializeUserInfo()
  }

  render() {
    return (
      // <div class="mostly-customized-scrollbar">
      <Container>
      <Provider store={this.props.store}>
        <Router>
          {/* <NaviContainer/> */}
          <Route exact path = "/">
            {/* <VimEditor
              xml={this.state.xml}
              onXmlChange={xml => this.setState({ xml })}
            /> */}
              <LinkTree />
          </Route>
          <Route path = "/auth" component = {Auth}></Route>
        </Router>
      </Provider>
      {/* // </div> */}
      </Container>
    )
   }
}


export default connect(
  null,
  (dispatch) => ({
    UserActions : bindActionCreators(UserActions, dispatch)
  })
)(App);

